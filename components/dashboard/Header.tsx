import UserAvatar from '../global/avatar/user-avatar';
import Search from '../global/search';
import Heading from './heading';

const Header = () => {
  return (
    <div className='flex'>
      <div className="flex gap-4">
        <UserAvatar />
        <Heading title="Welcome back!" desc="Iyene" />
      </div>
      <Search />
    </div>
  );
}

export default Header
