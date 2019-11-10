import React from 'react'
import { Card, Col, Row } from 'antd'
import styles from './index.less'

export default function Index(): JSX.Element {
  return (
    <>
      <h2 className={styles.title}>请选择需要使用的功能</h2>
      <Row className={styles.module} type="flex" justify="center" gutter={16}>
        <Col className={styles.moduleItem} span={8}>
          <Card>图像标注</Card>
        </Col>
        <Col className={styles.moduleItem} span={8}>
          <Card>通用工具</Card>
        </Col>
        <Col className={styles.moduleItem} span={8} />
      </Row>
    </>
  )
}
