import React from 'react'
import renderer from 'react-test-renderer'
import { RegateEmail } from '../distrubution/index.js'
import { shallow, mount } from 'enzyme'

test('No Value', () => {
  const component = shallow(
    <RegateEmail />
  )

  expect(component.props().value).toBe('')
})

test('Default Value', () => {
  const component = shallow(
    <RegateEmail value="mojtaba@gmail.com" />
  )

  expect(component.props().value).toBe('mojtaba@gmail.com')
})

test('Change Value', () => {
  const component = shallow(
    <RegateEmail />
  )

  component.simulate('change', {
    target: { value: 'mojtaba@gmail.com' }
  })

  expect(component.props().value).toBe('mojtaba@gmail.com')
})

test('Change Value Handler', () => {
  let _globalValue

  const onChange = value => _globalValue = value

  const component = shallow(
    <RegateEmail onChange={onChange} />
  )

  component.simulate('change', {
    target: { value: 'mojtaba@gmail.com' }
  })

  expect(_globalValue).toBe('mojtaba@gmail.com')
})

test('Read Only', () => {
  const component = shallow(
    <RegateEmail readOnly={true} />
  )

  expect(component.props().readOnly).toBe(true)
})

test('Disabled', () => {
  const component = shallow(
    <RegateEmail disabled={true} />
  )

  expect(component.props().disabled).toBe(true)
})

test('Required', () => {
  const component = shallow(
    <RegateEmail required={true} />
  )

  expect(component.props().required).toBe(true)
})

test('Validation: empty and not required', () => {
  const component = shallow(
    <RegateEmail />
  )

  let _isValid = component.instance().isValid()

  expect(_isValid).toBe(true)
})

test('Validation: empty and required', () => {
  const component = shallow(
    <RegateEmail required={true} />
  )

  let _isValid = component.instance().isValid()

  expect(_isValid).toBe(false)
})