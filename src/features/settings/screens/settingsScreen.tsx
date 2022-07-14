import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safeAre";
import { AuthContext } from "../../../services/authentication/authContext";
import { Text } from "../../../components/typography/text";
import { TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SettingsScreen = () => {
  const { onLogout, user } = useContext<any>(AuthContext);
  const navigation = useNavigation<any>();
  const [profilePicture, setProfilePicture] = useState(null);

  const getProfilePicture = async () => {
    try {
      const photo = await AsyncStorage.getItem(`@${user.uid}-photo`);
      setProfilePicture(photo);
    } catch (error) {}
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture();
    }, [user])
  );

  return (
    <SafeArea>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {profilePicture ? (
            <Avatar.Image
              size={180}
              source={{ uri: profilePicture }}
              backgroundColor="orange"
              style={{ marginBottom: 18 }}
            />
          ) : (
            <Avatar.Icon
              size={180}
              icon="human"
              backgroundColor="orange"
              style={{ marginBottom: 18 }}
            />
          )}
        </TouchableOpacity>
        <Text variant="caption">{user.email}</Text>
      </View>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
