import { TextField } from '@mui/material';

const Step3 = () => {
  return (
    <div className="w-full mx-auto">
      <div className="w-full mb-6">
        <TextField
          type="tel"
          variant="outlined"
          label="Phone Number"
          id="phone_num"
          size="small"
          fullWidth
        />
      </div>
      <div className="w-full mb-6">
        <TextField
          type="url"
          variant="outlined"
          label="Website"
          id="website"
          size="small"
          fullWidth
        />
      </div>
      <div className="w-full mb-4">
        <TextField
          type="url"
          variant="outlined"
          label="Facebook (Optional)"
          id="facebook"
          size="small"
          fullWidth
        />
      </div>
      <div className="w-full mb-4">
        <TextField
          type="url"
          variant="outlined"
          label="Twitter (Optional)"
          id="twitter"
          size="small"
          fullWidth
        />
      </div>
      <div className="w-full mb-10">
        <TextField
          type="url"
          variant="outlined"
          label="Instagram (Optional)"
          id="instagram"
          size="small"
          fullWidth
        />
      </div>
    </div>
  );
};

export default Step3;
