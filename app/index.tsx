import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';

export interface ITask {
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  // 1. Define your useState variables here
  const [checked, setChecked] = React.useState(false);

  const task: ITask = {
    title: 'My test item',
    category: 'Test category',
    isChecked: false,
  };

  return (
    <View className="bg-background flex flex-1">
      {/* Start of single task code */}

      {/* End of single task code */}
    </View>
  );
}
