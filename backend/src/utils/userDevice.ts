import DeviceDetector from "node-device-detector";

export const getUserDeviceType = () => {
    
    const detector = new (DeviceDetector as any)({
        clientIndexes: true,
        deviceIndexes: true,
        osIndexes: true
    });

    const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15';
    const result = detector.detect(userAgent);

    return result.device.type; // Output: 'smartphone'
   
}