import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
} from 'antd';
import styles from './TradeForm.less';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const { Option } = Select;
const { Search } = Input;

const formItemLayout = {
  labelCol: {
    md : { span: 24 },
    lg: { span: 8 }
  },
  wrapperCol: {
    md: { span: 24 },
    lg: { span: 16 }
  },
};

const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 4 },
  },
};

@connect(({tick,operation,account,contract,basicTradeForm}) => ({
  tick,operation,account,contract,basicTradeForm
}))
@Form.create()
class TradeForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
       // hoveredColumnIndex: null,
       cardHeight: ((window.innerHeight - 70) > 550?(window.innerHeight - 70):550) || 550
    }
  }

  handleSubscribe = (value,event) =>{
    const { dispatch,form,account} = this.props;
    form.validateFields(['fuzzySymbol'],(err, values) => {
      event.preventDefault();
      // 判断表单是否有错误
      if(err!=null){
        if(err.fuzzySymbol!==undefined){
          return;
        }
      }

      const rtAccountIDs = form.getFieldValue('rtAccountIDs')
      if(rtAccountIDs.length>0){
        account.accounts.forEach(element=>{
          if(rtAccountIDs.includes("ALL")||rtAccountIDs.includes(element.rtAccountID)){
            const subscribeData = {
              symbol:values.fuzzySymbol,
              exchange:form.getFieldValue('exchange'),
              productClass:form.getFieldValue('productClass'),
              currency:form.getFieldValue('currency'),
              gatewayID:element.gatewayID
            }
      
            dispatch({
              type: 'operation/subscribe',
              payload: subscribeData
            });
          }
        })
      }else{
        const subscribeData = {
          symbol:values.fuzzySymbol,
          exchange:form.getFieldValue('exchange'),
          productClass:form.getFieldValue('productClass'),
          currency:form.getFieldValue('currency'),
        }
        dispatch({
          type: 'operation/subscribe',
          payload: subscribeData
        });
      }
    });

  }

  handleSubmit = e => {
    const { dispatch, form,account} = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const rtAccountIDs = form.getFieldValue('rtAccountIDs')
        account.accounts.forEach(element=>{
          if(rtAccountIDs.includes("ALL")||rtAccountIDs.includes(element.rtAccountID)){
            const data = {
              symbol:values.fuzzySymbol,
              direction:form.getFieldValue('direction'),
              offset:form.getFieldValue('offset'),
              price:form.getFieldValue('price'),
              priceType:form.getFieldValue('priceType'),
              exchange:form.getFieldValue('exchange'),
              currency:form.getFieldValue('currency'),
              productClass:form.getFieldValue('productClass'),
              volume:form.getFieldValue('volume'),
              gatewayID:element.gatewayID,
              rtAccountID:element.rtAccountID
            }
  
            dispatch({
              type: 'operation/sendOrder',
              payload: data,
            });
          }
        })
      }
    });
  };

  resetForm = () =>{
    const {form,dispatch} = this.props;
    dispatch({
      type: 'basicTradeForm/reset',
      payload: {},
    });
    
    form.resetFields()
  }

  cancelAllOrders = (e) =>{
    const { dispatch} = this.props;
    e.preventDefault();
    dispatch({
      type: 'operation/cancelAllOrders',
      payload: {},
    });
  }

  handleFuzzySymbolChange = (e) =>{

    const { dispatch,tick,form} = this.props;
    dispatch({
      type: 'basicTradeForm/update',
      payload: {
        fuzzySymbol:e.target.value,
      },
    });
    dispatch({
      type: 'basicTradeForm/updateTick',
      payload: tick.ticks,
    });
    form.resetFields(['price'])
    
  }

  handlePriceAutoCompleteChange = (e) =>{
    const { dispatch,tick,form} = this.props;
    dispatch({
      type: 'basicTradeForm/update',
      payload: {
        priceAutoComplete:e.target.value,
      },
    });
    dispatch({
      type: 'basicTradeForm/updateTick',
      payload: tick.ticks,
    });
    form.resetFields(['price'])
  }

  handleDirectionChange = (e) =>{
    const { dispatch,tick,form} = this.props;
    dispatch({
      type: 'basicTradeForm/update',
      payload: {
        direction:e.target.value,
      },
    });
    dispatch({
      type: 'basicTradeForm/updateTick',
      payload: tick.ticks,
    });
    form.resetFields(['price'])
  }

  handlePriceChange = (value) =>{
    const { dispatch,tick,form} = this.props;
    dispatch({
      type: 'basicTradeForm/update',
      payload: {
        price:value,
      },
    });
    dispatch({
      type: 'basicTradeForm/updateTick',
      payload: tick.ticks,
    });
    form.resetFields(['price'])
  }

  handleExchangeChange = (value) =>{
    const { dispatch,tick,form} = this.props;
    dispatch({
      type: 'basicTradeForm/update',
      payload: {
        exchange:value,
      },
    });
    dispatch({
      type: 'basicTradeForm/updateTick',
      payload: tick.ticks,
    });
    form.resetFields(['price'])
  }

  onWindowResize=()=>{
    this.setState({
      cardHeight: ((window.innerHeight - 70) > 550?(window.innerHeight - 70):550) || 550
    })
  }

  componentDidMount = () => {
    const { dispatch,form} = this.props;
    dispatch({
      type: 'account/fetchAccounts',
      payload: {}
    });
    dispatch({
      type: 'basicTradeForm/fetchContracts',
      payload: {},
    });
    dispatch({
      type: 'basicTradeForm/reset',
      payload: {},
    });

    const tmpForm =form;
    dispatch({
      type: 'basicTradeForm/update',
      payload: {
        form:tmpForm,
      },
    });
    window.addEventListener('resize', this.onWindowResize)
  }

  componentWillUnmount = () =>{
      window.removeEventListener('resize', this.onWindowResize)
  }

  render() {
    const {
      submitting,
      account:{accounts},
      form: { getFieldDecorator},
      basicTradeForm,
    } = this.props;

    const {
      cardHeight
    } = this.state


    const accountDomChildren = [];
    accounts.forEach(a=>{ 
      accountDomChildren.push(<Option key={a.rtAccountID} value={a.rtAccountID}>{`账户:[${a.accountID}] 币种:[${a.currency}] 网关:[${a.gatewayDisplayName}]`}</Option>);
    });

    let priceDisabled = false;
    if(basicTradeForm.priceAutoComplete !== "MANUAL"){
      priceDisabled = true;
    }

    return (
      <Card bordered style={{height:cardHeight,overflowY:"auto"}} gutter={0}>
        <Form onSubmit={this.handleSubmit} hideRequiredMark gutter={0}>
          <FormItem className={styles.formItem} {...formItemLayout} label='代码'>
            {getFieldDecorator('fuzzySymbol',{
              rules: [
                {
                  required: true,
                  message: '请输入代码',
                  initialValue: basicTradeForm.fuzzySymbol
                },
              ],
            })(<Search size='small' placeholder='支持模糊查询' onChange={e=>this.handleFuzzySymbolChange(e)} onSearch={(value,event)=>this.handleSubscribe(value,event)} enterButton /> )}
          </FormItem>
          <FormItem
            className={styles.formItem}
            {...formItemLayout}
            label='方向'
          >
            {getFieldDecorator('direction',{
               rules: [
                {
                  required: true,
                  message: '请选择方向',
                },
              ]
            })(
              <RadioGroup size='small' onChange={this.handleDirectionChange} buttonStyle="solid">
                <RadioButton value='LONG'>多</RadioButton>
                <RadioButton value='SHORT'>空</RadioButton>
              </RadioGroup>)}
          </FormItem>
          <FormItem
            className={styles.formItem}
            {...formItemLayout}
            label='开平'
          >
            {getFieldDecorator('offset',{
               rules: [
                {
                  required: true,
                  message: '请选择开平',
                },
              ]
            })(
              <RadioGroup size='small' onChange={this.onChange} buttonStyle="solid">
                <RadioButton value='OPEN'>开仓</RadioButton>
                <RadioButton value='CLOSE'>平仓</RadioButton>
                <RadioButton value='CLOSETODAY'>平今</RadioButton>
                <RadioButton value='CLOSEYESTERDAY'>平昨</RadioButton>
              </RadioGroup>)}
          </FormItem>
          <FormItem
            className={styles.formItem}
            {...formItemLayout}
            label='报价类型'
          >
            {getFieldDecorator('priceType',{
              rules: [
                {
                  required: true,
                  message: '请选择报价类型',
                },
                
              ],
              initialValue: 'LIMITPRICE'
            })(
              <RadioGroup size='small' onChange={this.onChange} buttonStyle="solid">
                <RadioButton value='FAK'>FAK</RadioButton>
                <RadioButton value='FOK'>FOK</RadioButton>
                <RadioButton value='LIMITPRICE'>限价</RadioButton>
                <RadioButton value='MARKETPRICE'>市价</RadioButton>
              </RadioGroup>)}
          </FormItem>
          <FormItem
            className={styles.formItem}
            {...formItemLayout}
            label='价格'
          >
            {getFieldDecorator('price',{
              // initialValue:formPriceInit
              initialValue: basicTradeForm.price
            })(<InputNumber size='small' onChange={this.handlePriceChange} disabled={priceDisabled} style={{ width: "100%" }} min={0} max={999999999} step={basicTradeForm.step} />)}
          </FormItem>
          <FormItem 
            className={styles.formItem}
            {...formItemLayout}
            label='自动填价'
          >
            {getFieldDecorator('priceAutoComplete',{
              initialValue: 'MANUAL'
            })(
              <RadioGroup size='small' buttonStyle="solid" onChange={this.handlePriceAutoCompleteChange}>
                <RadioButton value='MANUAL'>手动</RadioButton>
                <RadioButton value='LASTPRICE'>最新</RadioButton>
                <RadioButton value='ACTIVE'>对手</RadioButton>
                <RadioButton value='QUEUE'>排队</RadioButton>
                <RadioButton value='ADD2'>超2</RadioButton>
              </RadioGroup>)}
          </FormItem>
          <FormItem
            className={styles.formItem}
            {...formItemLayout}
            label='数量'
          >
            {getFieldDecorator('volume',{
               rules: [
                {
                  required: true,
                  message: '请输入数量',
                },
              ]
            })(<InputNumber size='small' style={{ width: "100%" }} min={0} max={999999999} step={1} />)}
          </FormItem>

          <FormItem 
            className={styles.formItem}
            {...formItemLayout}
            label='账户'
          >
            {getFieldDecorator('rtAccountIDs',{
              rules: [
                {
                  required: true,
                  message:'请选择账户',
                },
                
              ],
              initialValue:
                []
            })(
              <Select
                size='small'
                mode="multiple"
                showSearch
                dropdownMatchSelectWidth={false}
                placeholder='请选择账户'
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="ALL">所有账户</Option>
                {accountDomChildren}
              </Select>
            )}
          </FormItem>

          <FormItem className={styles.formItem} {...submitFormLayout}>
            <Button size='small' type="danger" onDoubleClick={this.cancelAllOrders}>
              全部撤销
            </Button>
            <Button htmlType="reset" onClick={this.resetForm} style={{ marginLeft: 5 }}>
              重置
            </Button>
            <Button type="primary" htmlType="submit" loading={submitting} style={{ marginLeft: 5 }}>
              发单
            </Button>
          </FormItem>
          
          <FormItem 
            className={styles.formItem}
            {...formItemLayout}
            label={
              <span>
                交易所
                <em className={styles.optional}>
                  可选
                </em>
              </span>
            }
          >
            {getFieldDecorator('exchange')(
              <Select
                size='small'
                onChange={this.handleExchangeChange}
                showSearch
                placeholder='请选择交易所'
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="SEHK">SEHK 港交所</Option>
                <Option value="HKFE">HKFE 香港期货交易所</Option>
                <Option value="IDEALPRO">IDEALPRO IB外汇ECN</Option>
                <Option value="SSE">SSE 上交所</Option>
                <Option value="SZSE">SZSE 深交所</Option>
                <Option value="CFFEX">CFFEX 中金所</Option>
                <Option value="SHFE">SHFE 上期所</Option>
                <Option value="CZCE">CZCE 郑商所</Option>
                <Option value="DCE">DCE 大商所</Option>
                <Option value="SGE">SGE 上金所</Option>
                <Option value="INE">INE 国际能源交易中心</Option>
                <Option value="SMART">SMART IB智能路由</Option>
                <Option value="NYMEX">NYMEX IB期货</Option>
                <Option value="GLOBEX">GLOBEX CME电子交易平台</Option>
                <Option value="CME">CME 芝商所</Option>
                <Option value="ICE">ICE 洲际交易所</Option>
                <Option value="LME">LME 伦敦金属交易所</Option>
                <Option value="OANDA">OANDA 外汇做市商</Option>
                <Option value="FXCM">FXCM 外汇做市商</Option>
              </Select>
            )}
          </FormItem>
          <FormItem 
            className={styles.formItem}
            {...formItemLayout}
            label={
              <span>
                币种
                <em className={styles.optional}>
                  可选
                </em>
              </span>
            }
          >
            {getFieldDecorator('currency')(
              <Select
                size='small'
                showSearch
                placeholder='请选择币种'
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="USD">USD 美元</Option>
                <Option value="CNY">CNY 人民币</Option> 
                <Option value="CNH">CNH 离岸人民币</Option> 
                <Option value="HKD">HKD 港币</Option>
                <Option value="JPY">JPY 日元</Option>
                <Option value="EUR">EUR 欧元</Option>
                <Option value="GBP">GBP 英镑</Option>
                <Option value="DEM">DEM 德国马克</Option>
                <Option value="CHF">CHF 瑞士法郎</Option>
                <Option value="FRF">FRF 法国法郎</Option>
                <Option value="CAD">CAD 加拿大元</Option>
                <Option value="AUD">AUD 澳大利亚元</Option> 
                <Option value="ATS">ATS 奥地利先令</Option> 
                <Option value="FIM">FIM 芬兰马克</Option>
                <Option value="BEF">BEF 比利时法郎</Option> 
                <Option value="IEP">IEP 爱尔兰镑</Option>
                <Option value="ITL">ITL 意大利里拉</Option> 
                <Option value="LUF">LUF 卢森堡法郎</Option> 
                <Option value="NLG">NLG 荷兰盾</Option> 
                <Option value="PTE">PTE 葡萄牙埃斯库多</Option> 
                <Option value="ESP">ESP 西班牙比塞塔</Option>
                <Option value="IDR">IDR 印尼盾</Option> 
                <Option value="MYR">MYR 马来西亚林吉特</Option> 
                <Option value="NZD">NZD 新西兰元</Option>
                <Option value="PHP">PHP 菲律宾比索</Option> 
                <Option value="SUR">SUR 俄罗斯卢布</Option> 
                <Option value="SGD">SGD 新加坡元</Option>
                <Option value="KRW">KRW 韩国元</Option> 
                <Option value="THB">THB 泰铢</Option>
              </Select>
            )}
          </FormItem>
          <FormItem 
            className={styles.formItem}
            {...formItemLayout}
            label={
              <span>
                产品类型
                <em className={styles.optional}>
                  可选
                </em>
              </span>
            }
          >
            {getFieldDecorator('productClass')(
              <Select
                size='small'
                showSearch
                placeholder='请选择产品类型'
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="FUTURES">期货</Option>
                <Option value="FOREX">外汇</Option>
                <Option value="EQUITY">股票</Option>
                <Option value="OPTION">期权</Option>
                <Option value="SPOT">现货</Option>
              </Select>
            )}
          </FormItem>
        </Form>
      </Card>
    );
  }
}

export default TradeForm;


