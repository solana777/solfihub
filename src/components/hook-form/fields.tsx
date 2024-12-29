import { RHFSelect } from './rhf-select';
import { RHFUpload } from './rhf-upload';
import { RHFTextField } from './rhf-text-field';
import { RHFAutocomplete } from './rhf-autocomplete';
import { RHFSwitch, RHFMultiSwitch } from './rhf-switch';

// ----------------------------------------------------------------------

export const Field = {
  Text: RHFTextField,
  Autocomplete: RHFAutocomplete,
  Switch: RHFSwitch,
  MultiSwitch: RHFMultiSwitch,
  Select: RHFSelect,
  Upload: RHFUpload,
};
