import * as React from 'react'
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  // const { toggleColorMode } = useColorMode()"
  // const text = useColorModeValue("dark", "light)
  return <div>Theme switcher here</div>
}
