import { Operator } from '../operators';
import { PolicyStatementBase } from './1-base';

/**
 * A Condition
 */
export interface Condition {
  [key: string]: String;
}

/**
 * A collection of Condition's
 */
export interface Conditions {
  [key: string]: Condition;
}

/**
 * Adds "condition" functionality to the Policy Statement
 */
export class PolicyStatementWithCondition extends PolicyStatementBase {
  protected floydConditions: Conditions = {};
  private cdkConditionsApplied = false;

  /**
   * Injects conditions into the statement.
   *
   * Only relevant for the main package. In CDK mode this only calls super.
   */
  public toJSON(): any {
    // @ts-ignore only available after swapping 1-base
    if (typeof this.addResources == 'function') {
      this.cdkApplyConditions();
      return super.toJSON();
    }
    const statement = super.toJSON();

    if (this.hasConditions()) {
      statement.Condition = this.floydConditions;
    }

    return statement;
  }

  public toStatementJson(): any {
    this.cdkApplyConditions();
    // @ts-ignore only available after swapping 1-base
    return super.toStatementJson();
  }

  public freeze() {
    // @ts-ignore only available after swapping 1-base
    if (!this.frozen) {
      this.cdkApplyConditions();
    }
    // @ts-ignore only available after swapping 1-base
    return super.freeze();
  }

  private cdkApplyConditions() {
    if (this.hasConditions() && !this.cdkConditionsApplied) {
      Object.keys(this.floydConditions).forEach((operator) => {
        Object.keys(this.floydConditions[operator]).forEach((key) => {
          const condition: any = {};
          condition[key] = this.floydConditions[operator][key];
          // @ts-ignore only available after swapping 1-base
          this.addCondition(operator, condition);
        });
      });
      this.cdkConditionsApplied = true;
    }
  }

  /**
   * Checks weather a condition was applied to the policy.
   */
  public hasConditions(): boolean {
    return Object.keys(this.floydConditions).length > 0;
  }

  /**
   * Adds a condition to the statement
   *
   * @param key The key of the condition
   * @param value The value(s) to check for
   * @param operator [Operator](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html) of the condition. **Default:** `StringLike`
   */
  public if(key: string, value: any, operator?: Operator | string) {
    if (this.servicePrefix.length && key.indexOf(':') < 0) {
      key = this.servicePrefix + ':' + key;
    }

    if (typeof operator === 'undefined') {
      operator = new Operator().stringLike();
    }

    var op = '';
    if (typeof operator === 'string') {
      op = operator;
    } else {
      op = operator.toString();
    }

    // For boolean/number operators, IAM accepts both, booleans/numbers and
    // their string representation. To be consistent with how the IAM console
    // displays/generates the values, we convert them to strings.
    if (['boolean', 'number'].includes(typeof value)) {
      value = value.toString();
    }

    if (!(op in this.floydConditions)) {
      this.floydConditions[op] = {};
    }
    this.floydConditions[op][key] = value;

    return this;
  }

  /**
   * Compare the services with the services that made requests on behalf of the IAM principal (user or role). When a principal makes a request to an AWS service, that service might use the principal's credentials to make subsequent requests to other services.
   *
   * The `aws:CalledVia` key contains an ordered list of each service in the chain that made requests on the principal's behalf.
   *
   * **Availability:** This key is present in the request when a service that supports aws:CalledVia uses the credentials of an IAM principal to make a request to another service. This key is not present if the service uses a [service role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-role) or [service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role) to make a call on the principal's behalf. This key is also not present when the principal makes the call directly.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-calledvia
   *
   * @param value The service(s) to check for
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `ForAnyValue:StringEquals`
   */
  public ifAwsCalledVia(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if(
      'aws:CalledVia',
      value,
      operator || new Operator().forAnyValue().stringEquals()
    );
  }

  /**
   * Compare the services with the first service that made a request on behalf of the IAM principal (user or role). For more information, see [aws:CalledVia](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-calledvia).
   *
   * **Availability:** This key is present in the request when a service that supports aws:CalledVia uses the credentials of an IAM principal to make a request to another service. This key is not present if the service uses a [service role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-role) or [service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role) to make a call on the principal's behalf. This key is also not present when the principal makes the call directly.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-calledviafirst
   *
   * @param value The service(s) to check for
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsCalledViaFirst(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:CalledViaFirst', value, operator);
  }

  /**
   * Compare the services with the last service that made a request on behalf of the IAM principal (user or role). For more information, see [aws:CalledVia](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-calledvia).
   *
   * **Availability:** This key is present in the request when a service that supports aws:CalledVia uses the credentials of an IAM principal to make a request to another service. This key is not present if the service uses a [service role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-role) or [service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role) to make a call on the principal's behalf. This key is also not present when the principal makes the call directly.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-calledvialast
   *
   * @param value The service(s) to check for
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsCalledViaLast(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:CalledViaLast', value, operator);
  }

  /**
   * Compare the date and time of the request with the date and time that you specify. To view an example policy that uses this condition key, see [AWS: Allows Access Within Specific Dates](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws-dates.html).
   *
   * **Availability:** This key is always included in the request context.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-currenttime
   *
   * @param value The date and time to check for. Can be a string in one of the [W3C implementations of the ISO 8601 date](https://www.w3.org/TR/NOTE-datetime) (e.g. `2020-04-01T00:00:00Z`) or in epoch (UNIX) time or a `Date()` object (JavaScript only)
   * @param operator Works with [date operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date). **Default:** `DateLessThanEquals`
   */
  public ifAwsCurrentTime(
    value: Date | string | (Date | string)[],
    operator?: Operator | string
  ) {
    if (typeof (value as Date).getMonth === 'function') {
      value = (value as Date).toISOString();
    } else if (Array.isArray(value)) {
      value = value.map((item) => {
        if (typeof (item as Date).getMonth === 'function') {
          item = (item as Date).toISOString();
        }
        return item;
      });
    }
    return this.if(
      'aws:CurrentTime',
      value,
      operator || new Operator().dateLessThanEquals()
    );
  }

  /**
   * This key identifies the VPC to which Amazon EC2 IAM role credentials were delivered to. You can use this key in a policy with the [aws:SourceVPC](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcevpc) global key to check if a call is made from a VPC (`aws:SourceVPC`) that matches the VPC where a credential was delivered to (`aws:Ec2InstanceSourceVpc`).
   *
   * **Availability:** This key is included in the request context whenever the requester is signing requests with an Amazon EC2 role credential. It can be used in IAM policies, service control policies, VPC endpoint policies, and resource policies.
   *
   * This key can be used with VPC identifier values, but is most useful when used as a variable combined with the `aws:SourceVpc` context key. The `aws:SourceVpc` context key is included in the request context only if the requester uses a VPC endpoint to make the request. Using `aws:Ec2InstanceSourceVpc` with `aws:SourceVpc` allows you to use `aws:Ec2InstanceSourceVpc` more broadly since it compares values that typically change together.
   *
   * **Note:** This condition key is not available in EC2-Classic.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-ec2instancesourcevpc
   *
   * @param value The VPS ID
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsEc2InstanceSourceVpc(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:Ec2InstanceSourceVpc', value, operator);
  }

  /**
   * This key identifies the private IPv4 address of the primary elastic network interface to which Amazon EC2 IAM role credentials were delivered. You must use this condition key with its companion key `aws:Ec2InstanceSourceVpc` to ensure that you have a globally unique combination of VPC ID and source private IP. Use this key with `aws:Ec2InstanceSourceVpc` to ensure that a request was made from the same private IP address that the credentials were delivered to.
   *
   * **Availability:** This key is included in the request context whenever the requester is signing requests with an Amazon EC2 role credential. It can be used in IAM policies, service control policies, VPC endpoint policies, and resource policies.
   *
   * **Note:** This condition key is not available in EC2-Classic.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-vpcsourceip
   *
   * @param value The private IPv4 address
   * @param operator Works with IP [address operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_IPAddress). **Default:** `IpAddress`
   */
  public ifAwsEc2InstanceSourcePrivateIPv4(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if(
      'aws:Ec2InstanceSourcePrivateIPv4',
      value,
      operator || new Operator().ipAddress()
    );
  }

  /**
   * Compare the date and time of the request in epoch or Unix time with the value that you specify. This key also accepts the number of seconds since January 1, 1970.
   *
   * **Availability:** This key is always included in the request context.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-epochtime
   *
   * @param value The date and time to check for. Can be a string in one of the [W3C implementations of the ISO 8601 date](https://www.w3.org/TR/NOTE-datetime) (e.g. `2020-04-01T00:00:00Z`) or in epoch (UNIX) time or a `Date()` object (JavaScript only)
   * @param operator Works with [date](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date) and [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `DateLessThanEquals`
   */
  public ifAwsEpochTime(
    value: number | Date | string | (number | Date | string)[],
    operator?: Operator | string
  ) {
    if (typeof (value as Date).getMonth === 'function') {
      value = (value as Date).toISOString();
    } else if (Array.isArray(value)) {
      value = value.map((item) => {
        if (typeof (item as Date).getMonth === 'function') {
          item = (item as Date).toISOString();
        }
        return item;
      });
    }
    return this.if(
      'aws:EpochTime',
      value,
      operator || new Operator().dateLessThanEquals()
    );
  }

  /**
   * Use this key to compare the principal's issuing identity provider (IdP) with the IdP that you specify in the policy. This means that an IAM role was assumed using the `AssumeRoleWithWebIdentity` or `AssumeRoleWithSAML` AWS STS operations. When the resulting role session's temporary credentials are used to make a request, the request context identifies the IdP that authenticated the original federated identity.
   *
   * **Availability:** This key is present when the principal is a role session principal and that session was issued using a third-party identity provider.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-federatedprovider
   *
   * @param value The principal's issuing identity provider (IdP)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsFederatedProvider(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:FederatedProvider', value, operator);
  }

  /**
   * Compare the number of seconds since the requesting principal was authorized using MFA with the number that you specify. For more information about MFA, see [Using Multi-Factor Authentication (MFA) in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html).
   *
   * **Availability:** This key is included in the request context only if the principal was authenticated using MFA. If MFA was not used, this key is not present.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-multifactorauthage
   *
   * @param value Number of seconds
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericLessThan`
   */
  public ifAwsMultiFactorAuthAge(
    value: number | number[],
    operator?: Operator | string
  ) {
    return this.if(
      'aws:MultiFactorAuthAge',
      value,
      operator || new Operator().numericLessThan()
    );
  }

  /**
   * Check whether multi-factor authentication (MFA) was used to validate the temporary security credentials that made the request.
   *
   * **Availability:** This key is included in the request context only when the principal uses temporary credentials to make the request. The key is not present in AWS CLI, AWS API, or AWS SDK requests that are made using long-term credentials.
   *
   * Temporary credentials are used to authenticate IAM roles, federated users, IAM users with temporary tokens from `sts:GetSessionToken`, and users of the AWS Management Console. IAM users in the AWS Management Console unknowingly use temporary credentials. Users sign into the console using their user name and password, which are long-term credentials. However, in the background, the console generates temporary credentials on behalf of the user. To learn which services support using temporary credentials, see [AWS Services That Work with IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html).
   *
   * The `aws:MultiFactorAuthPresent` key is not present when an API or CLI command is called with long-term credentials, such as user access key pairs. Therefore we recommend that when you check for this key that you use the [...IfExists](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_IfExists) versions of the condition operators.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-multifactorauthpresent
   *
   * @param value Weather the MFA should be present or absent. **Default:** `true`
   */
  public ifAwsMultiFactorAuthPresent(value?: boolean) {
    return this.if(
      `aws:MultiFactorAuthPresent`,
      typeof value !== 'undefined' ? value : true,
      new Operator().bool()
    );
  }

  /**
   * Compare the account to which the requesting principal belongs with the account identifier that you specify.
   *
   * **Availability:** This key is always included in the request context.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalaccount
   *
   * @param value Account identifier(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsPrincipalAccount(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:PrincipalAccount', value, operator);
  }

  /**
   * Compare the [Amazon Resource Name](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns) (ARN) of the principal that made the request with the ARN that you specify.
   *
   * For IAM roles, the request context returns the ARN of the role, not the ARN of the user that assumed the role. To learn which types of principals you can specify in this condition key, see [Specifying a Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying).
   *
   * **Availability:** This key is always included in the request context.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalarn
   *
   * @param value Principle ARN(s)
   * @param operator Works with [ARN operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN) and [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `ArnLike`
   */
  public ifAwsPrincipalArn(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if(
      'aws:PrincipalArn',
      value,
      operator || new Operator().arnLike()
    );
  }

  /**
   * Check whether the call to your resource is being made directly by an AWS [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services). For example, AWS CloudTrail uses the service principal `cloudtrail.amazonaws.com` to write logs to your Amazon S3 bucket. The request context key is set to true when a service uses a service principal to perform a direct action on your resources. The context key is set to false if the service uses the credentials of an IAM principal to make a request on the principal's behalf. It is also set to false if the service uses a [service role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-role) or [service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role) to make a call on the principal's behalf.
   *
   * **Availability:** This key is present in the request context for all signed API requests that use AWS credentials.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalisawsservice
   *
   * @param value Weather the call to your resource is being made directly by an AWS service principal. **Default:** `true`
   */
  public ifAwsPrincipalIsAWSService(value?: boolean) {
    return this.if(
      `aws:PrincipalIsAWSService`,
      typeof value !== 'undefined' ? value : true,
      new Operator().bool()
    );
  }

  /**
   * Compare the identifier of the organization in AWS Organizations to which the requesting principal belongs with the identifier you specify.
   *
   * **Availability:** This key is included in the request context only if the principal is a member of an organization.
   *
   * This global key provides an alternative to listing all the account IDs for all AWS accounts in an organization. You can use this condition key to simplify specifying the `Principal` element in a resource-based policy. You can specify the organization ID in the condition element. When you add and remove accounts, policies that include the `aws:PrincipalOrgID` key automatically include the correct accounts and don't require manual updating.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalorgid
   *
   * @param value Organization ID(s) in format `o-xxxxxxxxxxx`
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsPrincipalOrgID(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:PrincipalOrgID', value, operator);
  }

  /**
   * Compare the AWS Organizations path for the principal who is making the request to the path you provide. That principal can be an IAM user, IAM role, federated user, or AWS account root user.
   *
   * This condition ensures that the requester is an account member within the specified organization root or organizational units (OUs) in AWS Organizations. An AWS Organizations path is a text representation of the structure of an Organizations entity. For more information about using and understanding paths, see Understand the [AWS Organizations Entity Path](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html#access_policies_access-advisor-viewing-orgs-entity-path).
   *
   * **Availability:** This key is included in the request context only if the principal is a member of an organization.
   *
   * **Note:** Organization IDs are globally unique but OU IDs and root IDs are unique only within an organization. This means that no two organizations share the same organization ID. However, another organization might have an OU or root with the same ID as yours. We recommend that you always include the organization ID when you specify an OU or root.
   *
   * `aws:PrincipalOrgPaths` is a multivalued condition key. Multivalued keys include one or more values in a list format. The result is a logical `OR`. When you use multiple values with the `ForAnyValue:` condition operator, the principal's path must match one of the paths provided. For policies that include multiple values for a single key, you must enclose the conditions within brackets like an array (`"Key":["Value1", "Value2"]`). You should also include these brackets when there is a single value. For more information about multivalued condition keys, see [Creating a Condition with Multiple Keys or Values](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_multi-value-conditions.html).
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalorgpaths
   *
   * @param value Organization path(s) in the format of `o-xxxxxxxxxxx/r-xxxxxxxxxx/ou-xxxx-xxxxxxxx/ou-xxxx-xxxxxxxx/`
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifAwsPrincipalOrgPaths(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:PrincipalOrgPaths', value, operator);
  }

  /**
   * Compare the [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services) name in the policy with the service principal that is making requests to your resources. You can use this key to check whether this call is made by a specific service principal. When a service principal makes a direct request to your resource, the `aws:PrincipalServiceName` key contains the name of the service principal. For example, the AWS CloudTrail service principal name is `cloudtrail.amazonaws.com`.
   *
   * **Availability:** This key is present in the request when the call is made by an AWS service principal. This key is not present in any other situation, including the following:
   *
   * - If the service uses a [service role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-role) or [service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role) to make a call on the principal's behalf.
   * - If the service uses the credentials of an IAM principal to make a request on the principal's behalf.
   * - If the call is made directly by an IAM principal.
   *
   * You can use this condition key to limit access to your trusted identities and expected network locations, while safely granting access to an AWS service.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalservicename
   *
   * @param value AWS service name, e.g. `cloudtrail.amazonaws.com`
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsPrincipalServiceName(
    value: string,
    operator?: Operator | string
  ) {
    return this.if('aws:PrincipalServiceName', value, operator);
  }

  /**
   * This key provides a list of all [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services) names that belong to the service. This is an advanced condition key. You can use it to restrict the service from accessing your resource from a specific Region only. Some services may create Regional service principals to indicate a particular instance of the service within a specific Region. You can limit access to a resource to a particular instance of the service. When a service principal makes a direct request to your resource, the `aws:PrincipalServiceNamesList` contains an unordered list of all service principal names associated with the Regional instance of the service.
   *
   * **Availability:** This key is present in the request when the call is made by an AWS service principal. This key is not present in any other situation, including the following:
   *
   * - If the service uses a [service role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-role) or [service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role) to make a call on the principal's behalf.
   * - If the service uses the credentials of an IAM principal to make a request on the principal's behalf.
   * - If the call is made directly by an IAM principal.
   *
   * `aws:PrincipalServiceNamesList` is a multivalued condition key. Multivalued keys include one or more values in a list format. The result is a logical `OR`. You must use the `ForAnyValue` or `ForAllValues` set operators with the `StringLike` [condition operator](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String) when you use this key. For policies that include multiple values for a single key, you must enclose the conditions within brackets like an array, such as `("Key":["Value1", "Value2"])`. You should also include these brackets when there is a single value. For more information about multivalued condition keys, see [Using multiple keys and values](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_multi-value-conditions.html#reference_policies_multi-key-or-value-conditions).
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalservicenameslist
   *
   * @param value AWS service name list
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `ForAnyValue:StringLike`
   */
  public ifAwsPrincipalServiceNamesList(
    value: string[],
    operator?: Operator | string
  ) {
    return this.if(
      'aws:PrincipalServiceNamesList',
      value,
      operator || new Operator().stringLike().forAnyValue()
    );
  }

  /**
   * Compare the tag attached to the principal making the request with the tag that you specify. If the principal has more than one tag attached, the request context includes one aws:PrincipalTag key for each attached tag key.
   *
   * **Availability:** This key is included in the request context if the principal is using an IAM user with attached tags. It is included for a principal using an IAM role with attached tags or [session tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html).
   *
   * You can add custom attributes to a user or role in the form of a key-value pair. For more information about IAM tags, see [Tagging IAM Users and Roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html). You can use `aws:PrincipalTag` to [control access](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html#access_iam-tags_control-resources) for AWS principals.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principaltag
   *
   * @param key The tag key to check
   * @param value The tag value(s) to check against
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsPrincipalTag(
    key: string,
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if(`aws:PrincipalTag/${key}`, value, operator);
  }

  /**
   * Compare the type of principal making the request with the principal type that you specify. For details about how the information appears in the request context for different principals, see [Specifying a Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying).
   *
   * **Availability:** This key is always included in the request context.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principaltype
   *
   * @param value The principal type(s). Any of `Account`, `User`, `FederatedUser`, `AssumedRole`, `Anonymous`
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifAwsPrincipalType(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:PrincipalType', value, operator);
  }

  /**
   * Compare who referred the request in the client browser with the referer that you specify. The `aws:referer` request context value is provided by the caller in an HTTP header.
   *
   * **Availability:** This key is included in the request context only if the request was invoked using a URL in the browser.
   *
   * For example, you can call [Amazon S3 API operations directly using a web browser](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html#example-bucket-policies-use-case-4). This means that you can view S3 objects, such as images and documents, directly through a web browser. The `aws:referer` condition allows you to restrict access to specific values in the HTTP or HTTPS request based on the value of the referrer header.
   *
   * **Warning:** This condition should be used carefully. It is dangerous to include a publicly known referer header value. Unauthorized parties can use modified or custom browsers to provide any `aws:referer` value that they choose. As a result, `aws:referer` should not be used to prevent unauthorized parties from making direct AWS requests. It is offered only to allow customers to protect their digital content, such as content stored in Amazon S3, from being referenced on unauthorized third-party sites.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-referer
   *
   * @param value The referer url(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsReferer(value: string | string[], operator?: Operator | string) {
    return this.if('aws:Referer', value, operator);
  }

  /**
   * Compare the AWS Region that was called in the request with the Region that you specify. You can use this global condition key to control which Regions can be requested. To view the AWS Regions for each service, see [Service endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html) in the Amazon Web Services General Reference.
   *
   * **Availability:** This key is always included in the request context.
   *
   * Some global services, such as IAM, have a single endpoint. Because this endpoint is physically located in the US East (N. Virginia) Region, IAM calls are always made to the us-east-1 Region. For example, if you create a policy that denies access to all services if the requested Region is not us-west-2, then IAM calls always fail. To view an example of how to work around this, see [NotAction with Deny](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html).
   *
   * **Note:** The `aws:RequestedRegion` condition key allows you to control which endpoint of a service is invoked but does not control the impact of the operation. Some services have cross-Region impacts. For example, Amazon S3 has API operations that control cross-Region replication. You can invoke `s3:PutBucketReplication` in one Region (which is affected by the `aws:RequestedRegion` condition key), but other Regions are affected based on the replications configuration settings.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requestedregion
   *
   * @param value The region(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifAwsRequestedRegion(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:RequestedRegion', value, operator);
  }

  /**
   * Compare the tag key-value pair that was passed in the request with the tag pair that you specify. For example, you could check whether the request includes the tag key `Dept` and that it has the value `Accounting`. For more information, see [Controlling Access During AWS Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html#access_tags_control-requests).
   *
   * **Availability:** This key is included in the request context when tags are passed in the request. When multiple tags are passed in the request, there is one context key for each tag key-value pair.
   *
   * Because you can include multiple tag key-value pairs in a request, the request content could be a multivalued request. In this case, you should consider using the `ForAllValues` or `ForAnyValue` set operators. For more information, see [Using Multiple Keys and Values](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_multi-value-conditions.html#reference_policies_multi-key-or-value-conditions).
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * @param key The tag key to check
   * @param value The tag value(s) to check against
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(
    key: string,
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if(`aws:RequestTag/${key}`, value, operator);
  }

  /**
   * Use this key to compare the requested resource owner's [AWS account ID](https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html) with the resource account in the policy. You can then allow or deny access to that resource based on the account that owns the resource.
   *
   * This key is equal to the AWS account ID for the account with the resources evaluated in the request.
   *
   * For most resources in your account, the ARN contains the owner account ID for that resource. For certain resources, such as Amazon S3 buckets, the resource ARN does not include the account ID. The following two examples show the difference between a resource with an account ID in the ARN, and an Amazon S3 ARN without an account ID:
   *
   * - `arn:aws:iam::123456789012:role/AWSExampleRole` - IAM role created and owned within the account 123456789012.
   * - `arn:aws:s3:::DOC-EXAMPLE-BUCKET2` - Amazon S3 bucket created and owned within the account 111122223333, not displayed in the ARN.
   *
   * **Availability:** This key is always included in the request context for most service actions. The following actions don't support this key:
   *
   *   - Amazon Elastic Block Store - All actions
   *   - Amazon EC2
   *     - `ec2:CopyFpgaImage`
   *     - `ec2:CopyImage`
   *     - `ec2:CopySnapshot`
   *     - `ec2:CreateTransitGatewayPeeringAttachment`
   *     - `ec2:CreateVolume`
   *     - `ec2:CreateVpcPeeringConnection`
   *   - Amazon EventBridge - All actions
   *   - Amazon WorkSpaces
   *     - `workspaces:CopyWorkspaceImage`
   *     - `workspaces:DescribeWorkspaceImages`
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourceaccount
   *
   * @param value The account ID
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceAccount(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:ResourceAccount', value, operator);
  }

  /**
   * Use this key to compare the identifier of the organization in AWS Organizations to which the requested resource belongs with the identifier specified in the policy.
   *
   * This global key returns the resource organization ID for a given request. It allows you to create rules that apply to all resources in an organization that are specified in the Resource element of an [identity-based policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html). You can specify the [organization ID](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_details.html) in the condition element. When you add and remove accounts, policies that include the aws:ResourceOrgID key automatically include the correct accounts and you don't have to manually update it.
   *
   * **Note:** Some AWS services require access to AWS owned resources that are hosted in another AWS account. Using `aws:ResourceOrgID` in your identity-based policies might impact your identity's ability to access these resources.
   *
   * **Availability:** This key is included in the request context only if the account that owns the resource is a member of an organization. This global condition key does not support the following actions:
   *
   * - Amazon Elastic Block Store - All actions
   * - Amazon EC2
   *   - `ec2:CopyFpgaImage`
   *   - `ec2:CopyImage`
   *   - `ec2:CopySnapshot`
   *   - `ec2:CreateTransitGatewayPeeringAttachment`
   *   - `ec2:CreateVolume`
   *   - `ec2:CreateVpcPeeringConnection`
   * - Amazon EventBridge - All actions
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourceorgid
   *
   * @param value ID of an organization
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceOrgID(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:ResourceOrgID', value, operator);
  }

  /**
   * Use this key to compare the AWS Organizations path for the accessed resource to the path in the policy. In a policy, this condition key ensures that the resource belongs to an account member within the specified organization root or organizational units (OUs) in AWS Organizations. An AWS Organizations path is a text representation of the structure of an Organizations entity. For more information about using and understanding paths, see [Understand the AWS Organizations entity path](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html#access_policies_access-advisor-viewing-orgs-entity-path).
   *
   * `aws:ResourceOrgPaths` is a multivalued condition key. Multivalued keys can have multiple values in the request context. You must use the `ForAnyValue` or `ForAllValues` set operators with [string condition operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String) for this key. For more information about multivalued condition keys, see [Using multiple keys and values](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_multi-value-conditions.html#reference_policies_multi-key-or-value-conditions).
   *
   * **Note:** Some AWS services require access to AWS owned resources that are hosted in another AWS account. Using aws:ResourceOrgPaths in your identity-based policies might impact your identity's ability to access these resources.
   *
   * **Availability:** This key is included in the request context only if the account that owns the resource is a member of an organization. This global condition key does not support the following actions:
   *
   * - Amazon Elastic Block Store - All actions
   * - Amazon EC2
   *   - `ec2:CopyFpgaImage`
   *   - `ec2:CopyImage`
   *   - `ec2:CopySnapshot`
   *   - `ec2:CreateTransitGatewayPeeringAttachment`
   *   - `ec2:CreateVolume`
   *   - `ec2:CreateVpcPeeringConnection`
   * - Amazon EventBridge - All actions
   * - Amazon WorkSpaces
   *   - `workspaces:CopyWorkspaceImage`
   *   - `workspaces:DescribeWorkspaceImages`
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourceorgpaths
   *
   * @param value The path of an organization
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceOrgPaths(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:ResourceOrgPaths', value, operator);
  }

  /**
   * Compare the tag key-value pair that you specify with the key-value pair that is attached to the resource. For example, you could require that access to a resource is allowed only if the resource has the attached tag key `Dept` with the value `Marketing`. For more information, see [Controlling Access to AWS Resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html#access_tags_control-resources).
   *
   * **Availability:** This key is included in the request context when the requested resource already has attached tags. This key is returned only for resources that [support authorization based on tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html). There is one context key for each tag key-value pair.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * @param key The tag key to check
   * @param value The tag value(s) to check against
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(
    key: string,
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if(`aws:ResourceTag/${key}`, value, operator);
  }

  /**
   * Check whether the request was sent using SSL. The request context returns `true` or `false`. In a policy, you can allow specific actions only if the request is sent using SSL.
   *
   * **Availability:** This key is always included in the request context.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-securetransport
   *
   * @param value Weather request was sent using SSL. **Default:** `true`
   */
  public ifAwsSecureTransport(value?: boolean) {
    return this.if(
      `aws:SecureTransport`,
      typeof value !== 'undefined' ? value : true,
      new Operator().bool()
    );
  }

  /**
   * Compare the account ID of the resource making a service-to-service request with the account ID that you specify.
   *
   * **Availability:** This key is included in the request context only if accessing a resource triggers an AWS service to call another service on behalf of the resource owner. The calling service must pass the resource ARN of the source to the called service. This ARN includes the source account ID.
   *
   * You can use this condition key to check that Amazon S3 is not being used as a [confused deputy](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html#confused-deputy). For example, when an Amazon S3 bucket update triggers an Amazon SNS topic post, the Amazon S3 service invokes the `sns:Publish` API operation. The bucket is considered the source of the SNS request and the value of the key is the account ID from the bucket's ARN.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceaccount
   *
   * @param value The account ID(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsSourceAccount(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:SourceAccount', value, operator);
  }

  /**
   * Compare the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns) of the resource making a service-to-service request with the ARN that you specify.
   *
   * This key does not work with the ARN of the principal making the request. Instead, use [aws:PrincipalArn](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalarn). The source's ARN includes the account ID, so it is not necessary to use `aws:SourceAccount` with `aws:SourceArn`.
   *
   * **Availability:** This key is included in the request context only if accessing a resource triggers an AWS service to call another service on behalf of the resource owner. The calling service must pass the ARN of the original resource to the called service.
   *
   * You can use this condition key to check that Amazon S3 is not being used as a [confused deputy](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html#confused-deputy). For example, when an Amazon S3 bucket update triggers an Amazon SNS topic post, the Amazon S3 service invokes the `sns:Publish` API operation. The bucket is considered the source of the SNS request and the value of the key is the bucket's ARN.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn
   *
   * @param value The source ARN(s)
   * @param operator Works with [ARN operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN) and [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `ArnLike`
   */
  public ifAwsSourceArn(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if(
      'aws:SourceArn',
      value,
      operator || new Operator().arnLike()
    );
  }

  /**
   * Compare the source identity that was set by the principal with the source identity that you specify in the policy.
   *
   * **Availability:** This key is included in the request context after a source identity has been set when a role is assumed using any AWS STS assume-role CLI command, or AWS STS `AssumeRole` API operation.
   *
   * You can use this key in a policy to allow actions in AWS by principals that have set a source identity when assuming a role. Activity for the role's specified source identity appears in [AWS CloudTrail](https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html#cloudtrail-integration_signin-tempcreds). This makes it easier for administrators to determine who or what performed actions with a role in AWS.
   *
   * Unlike [sts:RoleSessionName](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_rolesessionname), after the source identity is set, the value cannot be changed. It is present in the request context for all actions taken by the role. The value persists into subsequent role sessions when you use the session credentials to assume another role. Assuming one role from another is called [role chaining](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-role-chaining).
   *
   * The [sts:SourceIdentity](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sourceidentity) key is present in the request when the principal initially sets a source identity while assuming a role using any AWS STS assume-role CLI command, or AWS STS `AssumeRole` API operation. The `aws:SourceIdentity` key is present in the request for any actions that are taken with a role session that has a source identity set.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceidentity
   *
   * @param value The source identity
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsSourceIdentity(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:SourceIdentity', value, operator);
  }

  /**
   * Compare the requester's IP address with the IP address that you specify.
   *
   * **Availability:** This key is included in the request context, except when the requester uses a VPC endpoint to make the request.
   *
   * The `aws:SourceIp` condition key can be used in a policy to allow principals to make requests only from within a specified IP range. However, this policy denies access if an AWS service makes calls on the principal's behalf. In this case, you can use `aws:SourceIp` with the [aws:ViaAWSService](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-viaawsservice) key to ensure that the source IP restriction applies only to requests made directly by a principal.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceip
   *
   * @param value The source IP(s)
   * @param operator Works with IP [address operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_IPAddress). **Default:** `IpAddress`
   */
  public ifAwsSourceIp(value: string | string[], operator?: Operator | string) {
    return this.if(
      'aws:SourceIp',
      value,
      operator || new Operator().ipAddress()
    );
  }

  /**
   * Check whether the request comes from the VPC that you specify. In a policy, you can use this condition to allow access to only a specific VPC. For more information, see [Restricting Access to a Specific VPC](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies-vpc-endpoint.html#example-bucket-policies-restrict-access-vpc) in the *Amazon Simple Storage Service Developer Guide*.
   *
   * **Availability:** This key is included in the request context only if the requester uses a VPC endpoint to make the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcevpc
   *
   * @param value The VPS ID(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifAwsSourceVpc(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:SourceVpc', value, operator);
  }

  /**
   * Compare the VPC endpoint identifier of the request with the endpoint ID that you specify. In a policy, you can use this condition to restrict access to a specific VPC endpoint. For more information, see [Restricting Access to a Specific VPC Endpoint](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies-vpc-endpoint.html#example-bucket-policies-restrict-access-vpc-endpoint) in the *Amazon Simple Storage Service Developer Guide*.
   *
   * **Availability:** This key is included in the request context only if the requester uses a VPC endpoint to make the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcevpce
   *
   * @param value The VPC Endpoint ID(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsSourceVpce(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:SourceVpce', value, operator);
  }

  /**
   * Compare the tag keys in a request with the keys that you specify. As a best practice when you use policies to control access using tags, use the `aws:TagKeys` condition key to define what tag keys are allowed. For example policies and more information, see [Controlling Access Based on Tag Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html#access_tags_control-tag-keys).
   *
   * **Availability:** This key is included in the request context only if the operation supports attaching tags to resources.
   *
   * Because you can include multiple tag key-value pairs in a request, the request content could be a [multivalued](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_multi-value-conditions.html) request. In this case, you should consider using the `ForAllValues` or `ForAnyValue` set operators. For more information, see Using Multiple Keys and Values.
   *
   * Some services support tagging with resource operations, such as creating, modifying, or deleting a resource. To allow tagging and operations as a single call, you must create a policy that includes both the tagging action and the resource-modifying action. You can then use the `aws:TagKeys` condition key to enforce using specific tag keys in the request. For example, to limit tags when someone creates an Amazon EC2 snapshot, you must include the `ec2:CreateSnapshot` creation action ***and*** the `ec2:CreateTags` tagging action in the policy. To view a policy for this scenario that uses `aws:TagKeys`, see [Creating a Snapshot with Tags](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ExamplePolicies_EC2.html#iam-creating-snapshot-with-tags) in the *Amazon EC2 User Guide for Linux Instances*.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * @param value The tag key(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if('aws:TagKeys', value, operator);
  }

  /**
   * Compare the date and time that temporary security credentials were issued with the date and time that you specify.
   *
   * **Availability:** This key is included in the request context only when the principal uses temporary credentials to make the request. They key is not present in AWS CLI, AWS API, or AWS SDK requests that are made using access keys.
   *
   * To learn which services support using temporary credentials, see [AWS Services That Work with IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html).
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tokenissuetime
   *
   * @param value The date and time to check for. Can be a string in one of the [W3C implementations of the ISO 8601 date](https://www.w3.org/TR/NOTE-datetime) (e.g. `2020-04-01T00:00:00Z`) or in epoch (UNIX) time or a `Date()` object (JavaScript only)
   * @param operator Works with [date operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date). **Default:** `DateGreaterThanEquals`
   */
  public ifAwsTokenIssueTime(
    value: string | Date,
    operator?: Operator | string
  ) {
    return this.if(
      'aws:TokenIssueTime',
      dateToString(value),
      operator || new Operator().dateGreaterThanEquals()
    );
  }

  /**
   * Compare the requester's client application with the application that you specify.
   *
   * **Availability:** This key is always included in the request context.
   *
   * **Warning:** This key should be used carefully. Since the `aws:UserAgent` value is provided by the caller in an HTTP header, unauthorized parties can use modified or custom browsers to provide any `aws:UserAgent` value that they choose. As a result, `aws:UserAgent` should not be used to prevent unauthorized parties from making direct AWS requests. You can use it to allow only specific client applications, and only after testing your policy.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-useragent
   *
   * @param value The User Agent string(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsUserAgent(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if('aws:UserAgent', value, operator);
  }

  /**
   * Compare the requester's principal identifier with the ID that you specify. For IAM users, the request context value is the user ID. For IAM roles, this value format can vary. For details about how the information appears for different principals, see [Specifying a Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying).
   *
   * **Availability:** This key is included in the request context for all signed requests. Anonymous requests do not include this key.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-userid
   *
   * @param value The principal identifier(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsUserid(value: string | string[], operator?: Operator | string) {
    return this.if('aws:userid', value, operator);
  }

  /**
   * Compare the requester's user name with the user name that you specify. For details about how the information appears for different principals, see [Specifying a Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying).
   *
   * **Availability:** This key is always included in the request context for IAM users. Anonymous requests and requests that are made using the AWS account root user or IAM roles do not include this key.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-username
   *
   * @param value The user name(s)
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsUsername(value: string | string[], operator?: Operator | string) {
    return this.if('aws:username', value, operator);
  }

  /**
   * Check whether an AWS service makes a request to another service on your behalf.
   *
   * The request context key returns `true` when a service uses the credentials of an IAM principal to make a request on behalf of the principal. The context key returns `false` if the service uses a [service role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-role) or [service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role) to make a call on the principal's behalf. The request context key also returns `false` when the principal makes the call directly.
   *
   * **Availability:** This key is always included in the request context for most services.
   *
   *The following services do not currently support `aws:ViaAWSService`:
   *- Amazon EC2
   *- AWS Glue
   *- AWS Lake Formation
   *- AWS OpsWorks
   *
   * You can use this condition key to allow or deny access based on whether a request was made by a service. To view an example policy, see [AWS: Denies Access to AWS Based on the Source IP](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-ip.html).
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-viaawsservice
   *
   * @param value Whether a request was made by a service. **Default:** `true`
   */
  public ifAwsViaAWSService(value?: boolean) {
    return this.if(
      `aws:ViaAWSService`,
      typeof value !== 'undefined' ? value : true,
      new Operator().bool()
    );
  }

  /**
   * Compare the IP address from which a request was made with the IP address that you specify. In a policy, the key matches only if the request originates from the specified IP address and it goes through a VPC endpoint.
   *
   * **Availability:** This key is included in the request context only if the request is made using a VPC endpoint.
   *
   * For more information, see [Controlling Access to Services with VPC Endpoints](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-access.html) in the *Amazon VPC User Guide*.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-vpcsourceip
   *
   * @param value The VPC source IP(s)
   * @param operator Works with IP [address operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_IPAddress). **Default:** `IpAddress`
   */
  public ifAwsVpcSourceIp(
    value: string | string[],
    operator?: Operator | string
  ) {
    return this.if(
      'aws:VpcSourceIp',
      value,
      operator || new Operator().ipAddress()
    );
  }
}

function dateToString(value: Date | string | number): string | number {
  if (typeof (value as Date).getMonth === 'function') {
    value = (value as Date).toISOString();
  }
  return value as string;
}
