interface Styles {
  containerStyle?: ViewStyle;
  onElementContainerStyle?: StyleProp<ViewStyle>;
  offElementContainerStyle?: StyleProp<ViewStyle>;
  circleStyle?: ViewStyle;
  buttonStyle?: StyleProp<ViewStyle>;
  circleColorOff?: string;
  circleColorOn?: string;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
}

interface Props {
  testID?: string;
  isOn: boolean;
  theme?: DoobooTheme;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  duration?: number;
  onElement?: ReactElement;
  offElement?: ReactElement;
  onPress?: () => void;
}