import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Avatar } from '@radix-ui/react-avatar';

const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarImage
        className="h-[60px] w-[60px] rounded-full object-cover "
        src="/assets/images/avatar.png"
      />
      <AvatarFallback className="h-8 w-8">GO</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
