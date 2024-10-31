import { StyleSheet } from 'react-native';

const colors = {
  primary: '#1abc9c',  // Teal color used in headers, buttons, etc.
  accent: '#e67e22',   // Orange accent color
  textPrimary: '#333', // Dark color for primary text
  textSecondary: '#555', // Lighter color for secondary text
  background: '#f4f6f6', // Light grey background
  starActive: '#f1c40f', // Yellow color for active stars
  starInactive: '#ccc',  // Grey color for inactive stars
};

const typography = {
  fontSizeSmall: 12,
  fontSizeRegular: 14,
  fontSizeLarge: 18,
  fontSizeXLarge: 24,
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightBold: '700',
};

const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xLarge: 32,
};

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
  title: {
    fontSize: typography.fontSizeXLarge,
    fontWeight: typography.fontWeightBold,
    color: colors.primary,
    marginBottom: spacing.medium,
  },
  subtitle: {
    fontSize: typography.fontSizeLarge,
    fontWeight: typography.fontWeightRegular,
    color: colors.accent,
    marginBottom: spacing.small,
  },
  textPrimary: {
    fontSize: typography.fontSizeRegular,
    color: colors.textPrimary,
  },
  textSecondary: {
    fontSize: typography.fontSizeRegular,
    color: colors.textSecondary,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: typography.fontWeightBold,
    fontSize: typography.fontSizeLarge,
    textAlign: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: spacing.medium,
  },
  star: {
    marginRight: spacing.small,
  },
});

export { colors, typography, spacing, commonStyles };
