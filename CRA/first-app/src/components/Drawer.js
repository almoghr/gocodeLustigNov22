import Drawer from '@mui/material/Drawer';

export default function TemporaryDrawer({open, children}) {
  return (
        <div style={{width:'300px'}}>
          <Drawer anchor={"right"} open={open}>
            {children}
          </Drawer>
        </div>
  );
}