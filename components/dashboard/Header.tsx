import { Grid } from '@mui/material';
import Icon from '../global/Icons';
import UserAvatar from '../global/avatar/user-avatar';
// import Search from '../global/search';
import Heading from './heading';

const Header = () => {
  return (
    <Grid
      className="pt-0 flex items-center justify-between"
      item
      xs={12}
      container
    >
      <Grid className="flex flex-1 gap-4">
        <UserAvatar />
        <Heading title="Welcome back!" desc="Iyene" />
      </Grid>
      <Grid className="hidden lg:block" item xs={5}>
        {/* <Search placeholder="Search product..." /> */}
      </Grid>
      <Icon.NotificationBellIcon className="ml-[60px]" />
    </Grid>
  );
};

export default Header;
