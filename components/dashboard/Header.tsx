import UserAvatar from '../global/avatar/user-avatar';
import Heading from './heading';

const Header = () => {
  return (
    <div>
      <div className="flex gap-4">
        <UserAvatar />
        <Heading title="Welcome back!" desc="Iyene" />
      </div>
    </div>
  );
}

export default Header
