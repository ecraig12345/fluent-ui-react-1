import * as React from 'react'
import { Provider, Text, Icon, IconProps } from '@fluentui/react'
import { ShorthandValue } from 'src/types'

export interface LogoProps {
  companyName?: string
  icon?: ShorthandValue<IconProps>
  style?: React.CSSProperties
}

class MSTeamsLogo extends React.Component<LogoProps, any> {
  render() {
    const { companyName, icon, style } = this.props
    return (
      <Provider.Consumer
        render={({ siteVariables }) => {
          return (
            <div style={style}>
              {Icon.create(icon, {
                defaultProps: () => ({
                  variables: { color: siteVariables.colors.brand[600] },
                  size: 'largest',
                  xSpacing: 'after',
                  styles: { verticalAlign: 'middle' },
                }),
                generateKey: false,
              })}
              <Text
                styles={{
                  color: siteVariables.colors.white,
                  verticalAlign: 'middle',
                  lineHeight: '40px',
                }}
              >
                {companyName}
              </Text>
            </div>
          )
        }}
      />
    )
  }
}

export default MSTeamsLogo
