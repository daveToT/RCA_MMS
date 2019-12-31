import React, { Component } from 'react';
import PropTypes from "prop-types"
import {
    Form,
    Input
} from "antd";

class UpdateForm extends Component {
    static propTypes = {
        setForm: PropTypes.func.isRequired,
        rowItemName: PropTypes.string
    }

    componentDidMount() {
        this.props.setForm(this.props.form)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { rowItemName } = this.props;
        return (
            <Form>
                <Form.Item>
                    {
                        getFieldDecorator('categoryName', {
                            initialValue: rowItemName || "",
                            rules: [
                                { required: true, message: '分类名称必须输入' }
                            ]
                        })(
                            <Input type='text' placeholder='请输入分类名称'></Input>
                        )
                    }
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(UpdateForm);