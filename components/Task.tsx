import { ITask } from '@/app/index';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from './ui/checkbox';

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  return (
    <View className="flex flex-row">
      <View className="flex w-16 items-center justify-center">
        <Checkbox onCheckedChange={setChecked} checked={checked} className="border-2" />
      </View>
      <View className="border-foreground-transparent flex-1 border-b py-4">
        <Text className="text-foreground">Submit Assignment</Text>
        <Text className="text-foreground-transparent">Biology</Text>
      </View>
    </View>
  );
}
