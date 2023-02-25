# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcDefaultSecurityGroupClosed <a name="VpcDefaultSecurityGroupClosed" id="cdk-config-compliant.VpcDefaultSecurityGroupClosed"></a>

#### Initializers <a name="Initializers" id="cdk-config-compliant.VpcDefaultSecurityGroupClosed.Initializer"></a>

```typescript
import { VpcDefaultSecurityGroupClosed } from 'cdk-config-compliant'

new VpcDefaultSecurityGroupClosed(scope: Construct, id: string, props: IVpcDefaultSecurityGroupClosedProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-config-compliant.VpcDefaultSecurityGroupClosed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-config-compliant.VpcDefaultSecurityGroupClosed.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-config-compliant.VpcDefaultSecurityGroupClosed.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-config-compliant.IVpcDefaultSecurityGroupClosedProps">IVpcDefaultSecurityGroupClosedProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-config-compliant.VpcDefaultSecurityGroupClosed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-config-compliant.VpcDefaultSecurityGroupClosed.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-config-compliant.VpcDefaultSecurityGroupClosed.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-config-compliant.IVpcDefaultSecurityGroupClosedProps">IVpcDefaultSecurityGroupClosedProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-config-compliant.VpcDefaultSecurityGroupClosed.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-config-compliant.VpcDefaultSecurityGroupClosed.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-config-compliant.VpcDefaultSecurityGroupClosed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-config-compliant.VpcDefaultSecurityGroupClosed.isConstruct"></a>

```typescript
import { VpcDefaultSecurityGroupClosed } from 'cdk-config-compliant'

VpcDefaultSecurityGroupClosed.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-config-compliant.VpcDefaultSecurityGroupClosed.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-config-compliant.VpcDefaultSecurityGroupClosed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-config-compliant.VpcDefaultSecurityGroupClosed.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IVpcDefaultSecurityGroupClosedProps <a name="IVpcDefaultSecurityGroupClosedProps" id="cdk-config-compliant.IVpcDefaultSecurityGroupClosedProps"></a>

- *Implemented By:* <a href="#cdk-config-compliant.IVpcDefaultSecurityGroupClosedProps">IVpcDefaultSecurityGroupClosedProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-config-compliant.IVpcDefaultSecurityGroupClosedProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-config-compliant.IVpcDefaultSecurityGroupClosedProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---

