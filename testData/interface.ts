interface Styles {
  container: ViewStyle;
  onElementContainer: StyleProp<ViewStyle>;
  circleColorOff?: string;
}

interface Props {
  theme?: DoobooTheme;
  styles?: Styles;
  duration?: number;
  onElement?: ReactElement;
  onPress: (item: string) => void;
}