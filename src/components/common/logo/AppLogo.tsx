import { Typography } from "@mui/material";
import Link from "next/link";
import { LayoutPanelLeft } from "lucide-react";

function AppLogo() {
  return (
    <Typography variant="h5" color="primary" fontWeight={700}>
      <Link href="/" className="flex items-center gap-2">
        <LayoutPanelLeft size={24} />
        Website Title
      </Link>
    </Typography>
  );
}

export default AppLogo;
