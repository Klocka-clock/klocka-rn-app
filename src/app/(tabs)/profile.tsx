import { Image, Text, TouchableOpacity, View } from "react-native"

export default function SettingsScreen() {

  const stats = {
    posts: 17,
    likes: 555,
    followers: 2500,
    following: 780,
  }
  return (
    <View className="flex-1 flex-col p-4 ">
      {/* Profile Header */}
      <View className="mt-20 items-center rounded-t-2xl bg-slate-600 p-10">
        <Image
          source={{ uri: "" }}
          className="mb-2 h-20 w-20 rounded-full border-2 border-white"
        />
        <Text className="text-xl font-bold text-white">
          {`${"User"} ${"Name"}`}
        </Text>
        <Text className="text-sm text-white opacity-80">
          {"user@example.com"}
        </Text>
      </View>
      {/* Stats */}
      <View className="flex-row justify-around rounded-b-2xl bg-white py-3">
        <View className="items-center">
          <Text className="text-base font-bold text-gray-800">{stats.posts}k</Text>
          <Text className="text-xs text-gray-500">Posts</Text>
        </View>
        <View className="items-center">
          <Text className="text-base font-bold text-gray-800">{stats.likes / 10}k</Text>
          <Text className="text-xs text-gray-500">Likes</Text>
        </View>
        <View className="items-center">
          <Text className="text-base font-bold text-gray-800">{stats.followers / 1000}k</Text>
          <Text className="text-xs text-gray-500">Followers</Text>
        </View>
        <View className="items-center">
          <Text className="text-base font-bold text-gray-800">{stats.following / 1000}k</Text>
          <Text className="text-xs text-gray-500">Following</Text>
        </View>
      </View>
      {/* About Section */}
      <View className="mt-2 rounded-2xl bg-white p-4">
        <Text className="mb-2 text-lg font-bold text-gray-800">About</Text>
        <Text className="text-sm leading-5 text-gray-600">
          Driven {"User"} with a passion for creating user-centered solutions. I
          excel in strategic design and mentorship, guiding others to grow in their careers. My
          experience spans various industries, and I thrive on collaboration and believe that the
          best designs come from diverse ideas and teamwork.
        </Text>
        <Text className="mt-2 text-xs text-gray-600"> Overlook Drive, Richmond, IN 47374</Text>
        <Text className="mt-1 text-xs text-gray-600">@alexbuckmaster.info</Text>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity
        className="border-1 mt-4 items-center rounded-lg border-slate-500 bg-slate-100 py-3"
        onPress={() => {}}
      >
        <Text className="text-base font-medium text-slate-600">Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}
