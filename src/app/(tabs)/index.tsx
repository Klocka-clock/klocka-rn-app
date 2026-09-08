import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { StatusBar } from "expo-status-bar"
import {
  Activity,
  TrendingUp,
} from "lucide-react-native"
import { ScrollView, Text, View } from "react-native"

export default function BeaconDevTools() {
  return (
    <View className="flex-1 bg-white dark:bg-neutral-950">
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="my-10 flex-row items-center justify-between border-b border-gray-200 bg-white px-6 pb-4 pt-12 dark:border-neutral-800 dark:bg-neutral-900">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center justify-between gap-3">
              <View>
                <Text className="text-xl font-bold text-gray-900 dark:text-white">
                  Beacon DevTools
                </Text>
              </View>
              <View className="mt-1.5 flex-row items-center gap-2">
                <View className="rounded bg-emerald-100 px-2 py-0.5 dark:bg-emerald-900/30">
                  <Text className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    v1.0.0
                  </Text>
                </View>
                <View className="rounded bg-blue-100 px-2 py-0.5 dark:bg-blue-900/30">
                  <Text className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                    DEBUG
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Avatar size="md">
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>
        </View>
        {/* System Overview */}
        <View className="px-6 pb-4 pt-6">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              System Overview
            </Text>
            <View className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 dark:border-neutral-700 dark:bg-neutral-800">
              <Text className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                Last 24h
              </Text>
            </View>
          </View>

        </View>

        {/* System Health */}
        <View className="px-6 pb-4 pt-10">
          <View className="rounded-xl bg-white dark:bg-neutral-900  ">
            <View className="mb-5 flex-row items-center justify-between">
              <View>
                <Text className="text-sm font-bold text-gray-900 dark:text-white">
                  System Health
                </Text>
                <Text className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Last updated 2 min ago
                </Text>
              </View>
              <Activity color="#9ca3af" size={20} />
            </View>
          </View>
        </View>

        {/* Performance Metrics */}
        <View className="px-6 pb-4 pt-10">
          <View className="bg-white dark:bg-neutral-900">
            <View className="mb-5 flex-row items-center justify-between">
              <View>
                <Text className="text-sm font-bold text-gray-900 dark:text-white">
                  Performance Metrics
                </Text>
                <Text className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  24-hour average values
                </Text>
              </View>
              <TrendingUp color="#9ca3af" size={20} />
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="px-6 pb-4">
          <View className="rounded-xl border border-gray-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
            <Text className="mb-4 text-sm font-bold text-gray-900 dark:text-white">
              Recent Activity
            </Text>
          </View>
        </View>

        {/* About Section */}
        <View className="px-6 pb-6">
          <View className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 dark:border-blue-900/30 dark:from-blue-950/30 dark:to-indigo-950/30">
            <View className="flex-row gap-3">
              <View className="h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Activity color="white" size={20} />
              </View>
              <View className="flex-1">
                <Text className="mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  About This Tool
                </Text>
                <Text className="mb-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Professional indoor positioning system monitoring and testing platform. Built for
                  developers to manage beacon infrastructure, analyze signal strength, track spatial
                  data, and optimize user experience in real-time.
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <View className="rounded-full border border-blue-200 bg-white px-3 py-1 dark:border-blue-900 dark:bg-neutral-800">
                    <Text className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                      Internal Tooling
                    </Text>
                  </View>
                  <View className="rounded-full border border-blue-200 bg-white px-3 py-1 dark:border-blue-900 dark:bg-neutral-800">
                    <Text className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                      Real-time Diagnostics
                    </Text>
                  </View>
                  <View className="rounded-full border border-blue-200 bg-white px-3 py-1 dark:border-blue-900 dark:bg-neutral-800">
                    <Text className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                      Enterprise-grade
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
