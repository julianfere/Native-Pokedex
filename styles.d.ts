import 'styled-components/native';
import {AppThemeType} from './src/config/Theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends AppThemeType {}
}
