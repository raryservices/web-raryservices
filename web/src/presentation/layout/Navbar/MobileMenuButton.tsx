import { Button } from '@/components/ui/button'
import MenuIcon from "@/src/presentation/layout/Navbar/icon/Icon.svg"
import Image from 'next/image'

interface Props {
  onClick: () => void
}

export default function MobileMenuButton({ onClick }: Props) {
  return (
    <Button 
      variant="ghost" 
      className="bg-[#262626] text-[#C9C9C9] h-12 hover:bg-[#333333]" 
      onClick={onClick}
    >
      <Image src={MenuIcon} width={34} height={34} alt='MenuIcon'/>
    </Button>
  )
}
