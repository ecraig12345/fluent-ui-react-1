import * as React from 'react'
import { Menu, menuAsToolbarBehavior, MenuItemProps, ShorthandCollection } from '@fluentui/react'

const items = [
  { key: 'editorials', content: 'Editorials' },
  { key: 'review', content: 'Reviews' },
  { key: 'events', content: 'Upcoming Events' },
]

const MenuExample = () => <Menu defaultActiveIndex={0} items={items} />

const MenuExamplePointing = () => (
  <div>
    <Menu defaultActiveIndex={2} items={items} pointing="end" primary />
    <br />
    <Menu defaultActiveIndex={0} items={items} pointing="start" primary />
  </div>
)

const MenuExampleUnderlined = () => <Menu defaultActiveIndex={0} items={items} underlined primary />

const itemsWithSubmenu = [
  {
    key: 'editorials',
    content: 'Editorials',
    menu: {
      items: [
        { key: '1', content: 'item1' },
        {
          key: '2',
          content: 'item2',
          menu: [
            { key: '1', content: 'item2.1' },
            { key: '2', content: 'item2.2' },
          ],
        },
        {
          key: '3',
          content: 'item3',
          menu: [
            { key: '1', content: 'item3.1' },
            { key: '2', content: 'item3.2' },
          ],
        },
      ],
    },
  },
  {
    key: 'review',
    content: 'Reviews',
    menu: {
      items: [
        { key: '1', content: 'item1' },
        {
          key: '2',
          icon: 'stardust-circle',
          content: 'item2 non augue tortor mollis',
          menu: [
            { key: '1', icon: 'stardust-circle', content: 'item2.1' },
            { key: '2', content: 'item2.2' },
          ],
        },
        {
          key: '3',
          icon: 'stardust-circle',
          content: 'item3 elementum urna varius augue ultrices gravida malesuada fames',
          menu: [
            { key: '1', icon: 'stardust-circle', content: 'item3.1' },
            { key: '2', content: 'item3.2' },
          ],
        },
      ],
    },
  },
  { key: 'events', content: 'Upcoming Events' },
]

const MenuExampleWithSubMenu = () => <Menu defaultActiveIndex={0} items={itemsWithSubmenu} />

const itemsToolbar: ShorthandCollection<MenuItemProps> = [
  {
    key: 'format',
    icon: {
      name: 'format',
      outline: true,
    },
    'aria-label': 'Format Tool',
  },
  {
    key: 'paperclip',
    icon: {
      name: 'paperclip',
      outline: true,
    },
    'aria-label': 'Paperclip Tool',
  },
  {
    key: 'emoji',
    icon: {
      name: 'emoji',
      outline: true,
    },
    disabled: true,
    'aria-label': 'Emoji Tool',
  },
  {
    key: 'giphy',
    icon: {
      name: 'giphy',
      outline: true,
    },
    'aria-label': 'Giphy tool',
  },
  {
    key: 'sticker',
    icon: {
      name: 'sticker',
      outline: true,
    },
    'aria-label': 'Sticker Tool',
  },
  {
    key: 'meetup',
    icon: {
      name: 'video-camera-emphasis',
      outline: true,
    },
    'aria-label': 'Meetup Tool',
  },
  {
    key: 'settings',
    icon: {
      name: 'settings',
      outline: true,
    },
    'aria-label': 'Settings',
  },
  {
    key: 'menuButton2',
    icon: {
      name: 'more',
      outline: true,
    },
    'aria-label': 'More options',
    indicator: false,
    menu: {
      items: [
        {
          key: '5',
          content: 'item1',
          icon: {
            name: 'bookmark',
            outline: true,
          },
        },
        {
          key: 'divider',
          kind: 'divider',
        },
        {
          key: '6',
          content: 'item2',
          icon: {
            name: 'mark-as-unread',
            outline: true,
          },
        },
        {
          key: '7',
          content: 'item3',
          disabled: true,
          icon: {
            name: 'translation',
            outline: true,
          },
        },
        {
          key: 'divider2',
          kind: 'divider',
        },
        {
          key: '8',
          content: 'item3',
          icon: {
            name: 'trash-can',
            outline: true,
          },
        },
      ],
    },
  },
]

const MenuExampleToolbarShorthand = () => (
  <Menu
    defaultActiveIndex={0}
    items={itemsToolbar}
    iconOnly
    accessibility={menuAsToolbarBehavior}
    aria-label="Compose Editor"
  />
)

const MenuExampleVerticalPointing = () => (
  <Menu defaultActiveIndex={0} items={items} vertical pointing />
)

const AllExamples = () => {
  return (
    <>
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
      <MenuExample />
      <MenuExamplePointing />
      <MenuExampleUnderlined />
      <MenuExampleWithSubMenu />
      <MenuExampleToolbarShorthand />
      <MenuExampleVerticalPointing />
    </>
  )
}

export default AllExamples
