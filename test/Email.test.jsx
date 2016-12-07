import React from 'react'
import renderer from 'react-test-renderer'
import { RegateEmail } from '../distrubution/index.js'
import { shallow } from 'enzyme'

test('No Value', () => {
  const component = shallow(
    <RegateEmail />
  );

  expect(component.props().value).toBe('')
});

test('Default Value', () => {
  const component = shallow(
    <RegateEmail value="mojtaba@gmail.com" />
  );

  expect(component.props().value).toBe('mojtaba@gmail.com')
});

test('Change Value', () => {
  const component = shallow(
    <RegateEmail value="mojtaba@gmail.com" />
  );

  component.simulate('change', {
    target: { value: 'sarah.shakoori@gmail.com' }
  })

  expect(component.props().value).toBe('sarah.shakoori@gmail.com')
});

test('Change Value Handler', () => {
  let _globalValue;

  const onChange = value => _globalValue = value

  const component = shallow(
    <RegateEmail
      value="mojtaba@gmail.com"
      onChange={onChange}
    />
  );

  component.simulate('change', {
    target: { value: 'sarah.shakoori@gmail.com' }
  })

  expect(_globalValue).toBe('sarah.shakoori@gmail.com')
});