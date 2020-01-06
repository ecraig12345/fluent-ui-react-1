import { useBooleanKnob, useRangeKnob } from '@fluentui/docs-components'
import { Avatar, Chat, ChatItemProps, ShorthandCollection } from '@fluentui/react'
import * as React from 'react'

const actionItems = [
  { key: 'add', icon: { name: 'add' }, title: 'Add' },
  { key: 'ban', icon: { name: 'ban' }, title: 'Ban' },
  { key: 'bookmark', icon: { name: 'bookmark' }, title: 'Bookmark' },
  { key: 'broadcast', icon: { name: 'broadcast' }, title: 'Broadcast' },
  { key: 'calendar', icon: { name: 'calendar' }, title: 'Calendar' },
  { key: 'like', icon: { name: 'like' }, title: 'Like' },
  { key: 'star', icon: { name: 'star' }, title: 'Star' },
  { key: 'edit', icon: { name: 'edit' }, title: 'Edit' },
  { key: 'lock', icon: { name: 'lock' }, title: 'Lock' },
  { key: 'more', icon: { name: 'more' }, title: 'More actions' },
]

const ChatExampleInScrollableShorthand = () => {
  const [actionCount] = useRangeKnob({ name: 'actionCount', initialValue: 7, min: 1, max: 10 })
  const [overflow] = useBooleanKnob({ name: 'overflow', initialValue: true })
  const [height] = useRangeKnob({
    name: 'height',
    initialValue: '400px',
    min: '200px',
    max: '800px',
    step: 10,
  })
  const [width] = useRangeKnob({
    name: 'width',
    initialValue: '400px',
    min: '100px',
    max: '500px',
    step: 10,
  })

  const actionMenu = {
    iconOnly: true,
    items: actionItems.slice(0, actionCount - 1),
  }
  const items: ShorthandCollection<ChatItemProps> = [
    {
      attached: 'top',
      contentPosition: 'end',
      message: (
        <Chat.Message
          actionMenu={actionMenu}
          author="John Doe"
          content="Hello"
          mine
          timestamp="Yesterday, 10:15 PM"
          unstable_overflow={overflow}
        />
      ),
      key: 'message-1',
    },
    {
      attached: 'bottom',
      contentPosition: 'end',
      key: 'message-2',
      message: (
        <Chat.Message
          actionMenu={actionMenu}
          author="John Doe"
          content="I'm back!"
          mine
          timestamp="Yesterday, 10:15 PM"
          unstable_overflow={overflow}
        />
      ),
    },
    {
      gutter: <Avatar image="public/images/avatar/small/ade.jpg" />,
      message: (
        <Chat.Message
          actionMenu={actionMenu}
          author="Jane Doe"
          content="Hi"
          timestamp="Yesterday, 10:15 PM"
          unstable_overflow={overflow}
        />
      ),
      key: 'message-3',
    },
  ]

  return (
    <div style={{ height, width, overflow: 'scroll', margin: 50 }}>
      <Chat items={items} styles={{ minHeight: '100%' }} />
    </div>
  )
}

export default ChatExampleInScrollableShorthand
