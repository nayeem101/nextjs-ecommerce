import { TextField } from "@material-ui/core";

const InputField = ({ ...props }) => {
   return <TextField fullWidth variant="outlined" margin="normal" {...props} />;
};

export default InputField;
