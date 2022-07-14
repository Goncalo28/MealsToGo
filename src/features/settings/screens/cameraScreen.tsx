import React, { useRef, useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/authentication/authContext";
import { useNavigation } from "@react-navigation/native";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const snap = async () => {
    try {
      if (cameraRef) {
        const photo = await cameraRef.current.takePictureAsync();
        await AsyncStorage.setItem(`@${user.uid}-photo`, photo.uri);
        navigation.goBack();
      }
    } catch (error) {}
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};
