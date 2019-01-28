import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

// Experiments
import {
  AnimatedBackground,
  PulseIndicator,
  RollingBall,
  AnimatedList,
  Header,
  AnimatedGesture,
  TopDownAnimation,
} from './components';

const compList = [
  {
    id: 'animated-background',
    label: 'Animated Background',
    component: <AnimatedBackground />
  },
  {
    id: 'pulse-indicator',
    label: 'Pulse Indicator',
    component: <PulseIndicator />
  },
  {
    id: 'rolling-ball',
    label: 'Rolling Ball',
    component: <RollingBall />
  },
  {
    id: 'animated-gesture',
    label: 'Animated Gesture',
    component: <AnimatedGesture />
  },
]
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeItemId: null,
    }
  }

  onSelectItem = (item) => this.setState({ activeItemId: item.id });

  render() {
    const activeItem = compList.find(item => item.id === this.state.activeItemId);
    const activeComponent = activeItem
      ? activeItem.component
      : (
        <AnimatedList
          activeItemId={this.state.activeItemId}
          data={compList}
          onSelect={this.onSelectItem}
        />
      );

    return <TopDownAnimation />;
    /* return (
      <View style={{ flex: 1, backgroundColor: '#2c3e50' }}>
        <SafeAreaView style={{ flex: 1 }}>
        { activeItem && <Header title={activeItem.label} /> }
          { activeComponent }
        </SafeAreaView>
      </View>
    ) */
  }
}

export default App;
