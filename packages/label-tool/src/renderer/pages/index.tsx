import React from 'react'
import { Card, Col, Row } from 'antd'
import { Link } from 'umi'
import classnames from 'classnames'
import styles from './index.less'
import Icon from '@/components/icon'

export default function Index(): JSX.Element {
  return (
    <>
      <h2 className={styles.title}>Label Tool</h2>
      <Row className={styles.module} type="flex" justify="center" gutter={32}>
        <Col className={styles.moduleItem} span={6}>
          <Card className={styles.moduleContent}>
            <Icon type="pic" className={styles.moduleIcon} />
            <p className={styles.moduleName}>图像标注</p>
          </Card>
        </Col>
        <Col className={styles.moduleItem} span={6}>
          <Link to="/tools">
            <Card className={styles.moduleContent}>
              <Icon type="tool" className={styles.moduleIcon} />
              <p className={styles.moduleName}>通用工具</p>
            </Card>
          </Link>
        </Col>
        <Col className={styles.moduleItem} span={6}>
          <Card className={classnames(styles.moduleContent, styles.disabled)}>
            <Icon type="tool" className={styles.moduleIcon} style={{ opacity: 0 }} />
            <p className={styles.moduleName} style={{ opacity: 0 }}>
              暂无
            </p>
          </Card>
        </Col>
        <Col className={styles.moduleItem} span={6}>
          <Card className={classnames(styles.moduleContent, styles.disabled)}>
            <Icon type="tool" className={styles.moduleIcon} style={{ opacity: 0 }} />
            <p className={styles.moduleName} style={{ opacity: 0 }}>
              暂无
            </p>
          </Card>
        </Col>
      </Row>
    </>
  )
}
