import React from 'react';

import { mount, ReactWrapper } from 'enzyme';

import '../init';

import StatusPanel from '../../src/components/StatusPanel';

interface IProps {
  message: any;
  isError?: boolean;
};

describe('Components / StatusPanel', () => {
  it('renders correctly', () => {
    const StatusPanelComponent: ReactWrapper = mount(<StatusPanel message="" />);
    expect(StatusPanelComponent).toMatchSnapshot();
  });

  it('renders component correctly with null message', () => {
    const props: IProps = {
      message: null,
    };

    const StatusPanelComponent: ReactWrapper = mount(<StatusPanel {...props} />);
    expect(StatusPanelComponent.prop('message')).toEqual(null);
  });

  it('renders component correctly without error flag', () => {
    const props: IProps = {
      message: 'test',
    };

    const StatusPanelComponent: ReactWrapper = mount(<StatusPanel {...props} />);

    expect(StatusPanelComponent.prop('message')).toEqual('test');
    expect(StatusPanelComponent.prop('isError')).toEqual(undefined);
  });

  it('renders component correctly with error flag', () => {
    const props: IProps = {
      message: 'test',
      isError: true,
    };

    const StatusPanelComponent: ReactWrapper = mount(<StatusPanel {...props} />);

    expect(StatusPanelComponent.prop('message')).toEqual('test');
    expect(StatusPanelComponent.prop('isError')).toEqual(true);
  });
});
