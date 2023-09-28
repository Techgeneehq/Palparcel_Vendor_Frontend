import { Grid } from '@mui/material';
import UserAvatar from '../global/avatar/user-avatar';
import Search from '../global/search';
import Heading from './heading';

const Header = () => {
  return (
    // <div className="flex">
    <Grid className="pt-0 flex" item xs={12} container>
      <Grid className="flex flex-1 gap-4">
        <UserAvatar />
        <Heading title="Welcome back!" desc="Iyene" />
      </Grid>
      <Grid className="hidden lg:block" item xs={6}>
        <Search placeholder="Search product..." />
      </Grid>
    </Grid>
    // </div>
  );
};

export default Header;
