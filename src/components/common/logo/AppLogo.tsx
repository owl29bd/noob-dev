import { Typography } from "@mui/material";
import Link from "next/link";
import { Bird } from "lucide-react";

function AppLogo() {
  return (
    <Typography variant="h5" color="primary" fontWeight={700}>
      <Link href="/" className="flex items-center gap-2">
        <Bird size={24} />
        Pigeon
      </Link>
    </Typography>
  );
}

export default AppLogo;
