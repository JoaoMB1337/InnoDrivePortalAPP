import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'InnoPortalDriveAPP',
  webDir: 'www',
  server: {
    allowMixedContent: true
  },
  android: {
    permissions: [
      "android.permission.CAMERA",
      "android.permission.WRITE_EXTERNAL_STORAGE"
    ]
  },
  ios: {
    "NSCameraUsageDescription": "Need camera access to take pictures",
    "NSPhotoLibraryUsageDescription": "Need photo library access to select pictures",
    "NSPhotoLibraryAddUsageDescription": "Need photo library access to save pictures"
  }
};

export default config;
