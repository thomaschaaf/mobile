import React from 'react';
import {ScrollView} from 'react-native';
import {Box, Text} from 'components';
import {useI18n} from '@shopify/react-i18n';

export const Permissions = () => {
  const [i18n] = useI18n();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box flex={1} paddingHorizontal="xl">
        <Box paddingHorizontal="l" marginTop="m">
          <Text variant="bodyTitle" color="overlayBodyText" marginHorizontal="l" marginBottom="l" textAlign="center">
            {i18n.translate('OnboardingPermissions.Title')}
          </Text>
        </Box>
        <Box marginBottom="l">
          <Text variant="bodyText" color="overlayBodyText" textAlign="center">
            {i18n.translate('OnboardingPermissions.Body')}
          </Text>
        </Box>
        <Box marginBottom="l">
          <Text variant="bodyText" color="overlayBodyText" textAlign="center">
            {i18n.translate('OnboardingPermissions.Body2')}
          </Text>
        </Box>
        <Box marginBottom="l">
          <Text variant="bodyText" color="overlayBodyText" textAlign="center">
            {i18n.translate('OnboardingPermissions.Body3')}
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
};
