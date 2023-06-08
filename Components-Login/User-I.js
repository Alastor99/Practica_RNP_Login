import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { HelperText, TextInput} from 'react-native-paper';

const User = () => {
  const [text, setText] = React.useState('');

   const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('@gmail.com');
  };


 return (
    <View>
      <TextInput
       mode="outlined"
       placeholder="Example: yadercenteno24"
       right={<TextInput.Affix text="@gmail.com" />}
       label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
    </View>
  );
};

export default User;