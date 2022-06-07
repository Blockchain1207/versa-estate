import CardContent from "@mui/material/CardContent";
// import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import copy from "copy-to-clipboard";

// const CardWrapper = styled(Card)({
//   background: "rgb(251 241 225)",
// });
const Input = styled("input")(({ theme }) => ({
  fontSize: 12,
  fontWeight: 300,
  borderRadius: 50,
  padding: 10,
  marginLeft: "10%",
  display: "block",
  border: `1px solid ${theme.palette.text.textLight}`,
  color: theme.palette.text.textLight,
  background: theme.palette.text.darkBgColor,
  width: "80%",
  outline: "none",
  '& label.Mui-focused': {
    color: '#ffffff00',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ffffff00',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff00',
    },
    '&:hover fieldset': {
      borderColor: '#ffffff00',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffffff00',
    },
  },
}));

const CopyButton = styled(Button)(({ theme }) => ({
  color: "#F8F0E3",
  border: `1px solid ${theme.palette.text.textLight}`,
  backgroundColor: "#46494C",
  marginTop: "10px",
  padding: "0px 0px",
  '&:hover,&:focus': {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.text.textLight,
    boxShadow: 'none',
    color: "#f4b52d",
  },
  "&:disabled": {
    color: theme.palette.text.textLight,
    background: theme.palette.text.darkBgColor,
    borderColor: theme.palette.text.textLight,
  },
}));

const copyToClipboard = str => {
  copy(str);
};

export default function ReferralLink({ address }) {
  const link = `${window.origin}?ref=${address}`;
  return (
    <>
      <Input value={address ? link : ""} readOnly/>
      <CopyButton
                    variant="contained"
                    onClick={()=>{copyToClipboard(link)}}
                  >
                    COPY
        </CopyButton>
      <Typography variant="body2" color="textLight" sx={{ mt: 3, mb: 3}}>
        Earn 5% of the USDC deposited from anyone who uses your referral link.
      </Typography>
    </>
  );
}
