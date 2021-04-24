import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // MenuItemOption,
  // MenuGroup,
  // MenuOptionGroup,
  // MenuIcon,
  // MenuCommand,
  // MenuDivider,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function MenuComponent() {
  return (
    <Menu>
      <MenuButton aria-label="Options" variant="outline">
        ...
        {/*
        <div className="_3dot">
          <img
            src="https://uploads-ssl.webflow.com/603d12d60cce95ce28fa8a69/603d12d60cce95503afa8cd6_more-vertical%20(1).svg"
            loading="lazy"
            width={22}
            alt=""
            className="image-339"
          />

        </div>
*/}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}
