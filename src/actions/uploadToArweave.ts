import Arweave from 'arweave';

async function UploadFileToBlockChain(file: File | Blob, fileTypeOverride?: string): Promise<string | undefined> {
    const isFileTypeSupported = file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'application/json';
    const isFileSizeSupported = file.size <= 5000 * 1024; // 150kB in bytes

    if (!isFileTypeSupported || !isFileSizeSupported) {
        console.error('File type not supported or file size too large.');
        return undefined;
    }

    const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false,
    });

    // Determine content type
    const contentType = fileTypeOverride || file.type;

    // Handle JSON data differently
    let data;
    if (contentType === 'application/json' && !(file instanceof Blob)) {
        data = JSON.stringify(file);
    } else {
        data = await file.arrayBuffer();
    }

    const transaction = await arweave.createTransaction({
        data
    });

    transaction.addTag('Content-Type', contentType);

    // Your signing mechanism here (placeholder)
    await arweave.transactions.sign(transaction,
        {
            "d": "XwbwjzBptflpQBzO3fk5DZ7dmUsO0_bpfGUsSgT98pq-3313EvMq-o0bY8stJqqU1igSSO-xqFlpiXXLGvyHxjNnvFLlcVCmDPizoFD7p_NcgUF_XLMngIbEXMprQch2s9QTbHTcTF9iE7KBDn3cwnW86ksU2lLNxySbo_Htf5lS-J4pPVoMqWeeUkup3wrGc-1QQiFFrgdhuH0655yq_JRHACW1v48RG280u1ziBgjqOaAZJVD4Ruxsi93Y8ZDQ7Q2n7vO1j65b3DmVn_aztjaey46-hHih3WrJY5SoEkDWTFe4pSpxsWNQlsSTXt32EHTAjUBEL4Fiz0BhCM0S35x6Cw4acUMUxnKsTfAojDnh7_5_rHrzFc_pGNghop8F4ZqBXg4jnLrRi1xKVhx2kDnC9r3cx0r74vv5fzwyj5koveXEU_90IOxHcJPtgDuFbbAjb1fLA9ckXg3KiXLwmxx4z5X3Lw_7RdiuM_U020JuuEQ18i_uNGFHtvv3BwEm5_KQNMcRYuE1EWnry9UAqx6bcWl3bIONINqgPYuStGq15exq6t6ynEY6Zo8GXbdfWon9pFvwhNlUt2OXlVmb7yjGPggV2VO9-qepxOYhqXRIN8NGAlZHUyz_Ep0WN-tElxDxAO_D9yhveSVidj4YC5ykTIbbQpi0bgqgvczECTk",
            "dp": "NWWg670bq1nSayC0Ei5Usya_CGIx1RgmE0B2gXCdrHfjKPA27fHMMZZTLz5cDIJ1KkNUxKsK1ibX6btTK9ZZlfeNCuZbLr2vwjTGELTfPZHPcFjOdLVa1toN_S30qIgrSjnGOnueXUzHa-94KNa74gtFOOcWSJ0WHo1HQf7r-RxjwWoyaFlylzTXqCxAPaX0OznPCnygeUpSvzVT0BOa-sCTXH--Z-84orhSRaBxw-VsBjndOT9Eij-Q5mEHGOhDjsSZcS5URKJp9NvbkwC50o_pkV6V95VtSYS5bidCxQzj4BHcfhfi8YZLcBBCRKsIRl54PlmdYZI4TMbpOrD5ow",
            "dq": "aDzFgrl5YQU_6TJSsZGrSWHMAl_SVHWzz5cfw7ygTCrZLirWx7CEXSPT7Hr84sZXDvzv6eZx5GTre4fVjiXcgVJsDSLjCoTB738uBo4Tx6W_aLtiTnG8eVBl-LZW7zkS_G4145rXlxnkaiei0vTV4dfcCRMwEeBwlxDY7mZGXepSg16gLGI4Z-AP5Sg1mKNJMWqAmuPRhaMbldapiR4WeGpQud_RI0rBH7WyYmd7jihAPiRG1Lz8mw2oH_UxjcTAtf_oLoydOEAKy_9_PglOE0sBAqPCllN4iZtF8Z7LgNpC6Anjk_Rr0L7dRKjG2HYCodh40mLhA4mi3ytWMI8J0w",
            "e": "AQAB",
            "kty": "RSA",
            "n": "pXKsmC8RhZPcNdmb0-5BsF_VSpVSWjgaksEthRNM_0ioTAlZKa16K3HfxREvfxt1bfoZjRP4ta_X-csC2RwiPaNNmLnCMdnwEdZNBT2oKm5XU_NTyeHAO4KD_TeJXcFoXmpjbtfdu1X3c6kI-GqbJQcOGvVz6SWHM6mQ0ootW99RlVeYRObrFxyFa3RPc_y38ToRRUHfUtsfrYLp2S1vJiXrRhFeaz4K3wt-owrglgVcYyVbGd8YK3LyCGwV7BJaKmaecC95T4CMOaeE4wRISU1xKx1abudNJmAMSPJozurMapIJM2wc-IMik4-ADrLztO_jgRLERdesN5JRGiS5BeNulR0DwVlHHVn-QoPSmYX4y3fWk0ifUMFqw1rbZ9tCOZekQNVlaR6Cjqmu4is5rbgwf5uX7nsvD0Ged8lKUfQHLeokqJoqL0rU-0ltitlv_hcj3mNB-lfmJpmp6o9MhFdtJoHdts1ct13iN2yKj2pXTnjR24tQz1-85VoUTeTQPga9_XyjS9alqd8s7o2ZWB1P4QUu9qbvjymA9tE-JUXen13scVtr0TmccRdMDUVbepfULI7gDTBI2WyIa-QWaO9piloPru5KN5JqJoLpMK3-zWgRI_MbRXrVcUXeqmpM0clG2uMrUu64jUcLfSA4sYl9hpg4vr0fCGIPB57dRLU",
            "p": "0ousDFpe-h-5mIO1EQaPO4Ve2UhJLij85RnDnzLzxZ5vzUlMCwoHahU8cm5sQpN8ibQNXn1V4rsbYOoQ1kyCXn6fJHqCqItWBQeBSyGHn4lrJ9GHTQYD6lPU7HQpMWhY4HUQUJzee8oqPmxm8_wRcoCY2qeIWeCnBBKCsSDKcnGmmkSJfQxaBUJCF1FIpo_6WaQ0_PXtJXxflC-MAyISDpBKIcdVdjypo5Ia7BiSkpXsftHsbO6TqzpYh_BP_39ObbJoLVcu8gKI-doGW-Tno134iMYfq2bamkTFIYKrzQtVumDD6lHNOatlJtrmtV2VOQPYNp0w0-2bl86up6QF6w",
            "q": "ySqRafYI7eegpCzeS2cgKN3p8ZHtl9VN0IttYfNhfIHLAxF9Km3OZOG19YseR8aZwA7yt0ddjTW1_YmMVD7zkBcjc0NjVJKsKo5DVPect0Hm6lzpjnxNP1ZokUETxStqcoyM3PGl7fbIx-Qs28o94ZKZr9wgF4Yi1tfTyd4Y--lq-gAaItSyf1QuQ_Pt0tIkWx-ExWQuqML8K4d4PreuFyYtEQx0JYLCKkg4NTSr1HTGQCBc0lpd2sq7-ij5wgFzdTSsQhqEyil4O1xCDIDCKopVdCqlovmuhFRWXilVpGul4xK-0Dp_Pl8D8GVImPpNNVAll-vSi8TLskeUrlwX3w",
            "qi": "FCYmnk1KRr7c_645Ztnyhcz7ZsDJhuampAyCXUJ0-GCEXvAbNaydF6VKWQ9tsa9ROP5006pKaB1wlsP4sDlqcrVd-zL0gdS7fx25rpxxz5ECg8Ih63SOeogvFqdli0Nuiu_lpYqNrHjJ_aUw_AfbZLFYIBlZsmuyHkfyH4zSX6FylAshqwRUfwuP0FoaqqiI9awWpvdx8dH7gXxNQAecebroPUFMn9vXH7-Its9RBJk8BzQkVCtkKRQM14oNFVjTwx8AH55n2p9hoiD1qSErbErTIuzxrQR2W5pHOnRUYMMbznjjVZ0uhPylE-KOV3AVhqxlf3tGaq8yFQTBo8s6ow"
        }
    );

    const response = await arweave.transactions.post(transaction);

    if (response.status === 200) {
        return `https://arweave.net/${transaction.id}`;
    } 
        console.error('Failed to upload to Arweave:', response.status);
        return undefined;
    
}

export default UploadFileToBlockChain;
