import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service account
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsaccounts.html
 */
export class Account extends PolicyStatement {
  public servicePrefix = 'account';
  public actions: Actions = {
    "DisableRegion": {
      "url": "",
      "description": "Grants permission to disable a region",
      "accessLevel": "Write",
      "conditions": [
        "account:TargetRegion"
      ]
    },
    "EnableRegion": {
      "url": "",
      "description": "Grants permission to enable a region",
      "accessLevel": "Write",
      "conditions": [
        "account:TargetRegion"
      ]
    },
    "ListRegions": {
      "url": "",
      "description": "Grants permission to list regions",
      "accessLevel": "List"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service account
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsaccounts.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to disable a region
   *
   * Access Level: Write
   */
  public disableRegion() {
    this.add('account:DisableRegion');
    return this;
  }

  /**
   * Grants permission to enable a region
   *
   * Access Level: Write
   */
  public enableRegion() {
    this.add('account:EnableRegion');
    return this;
  }

  /**
   * Grants permission to list regions
   *
   * Access Level: List
   */
  public listRegions() {
    this.add('account:ListRegions');
    return this;
  }

  /**
   * Filters access by a list of regions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifTargetRegion(value: string | string[], operator?: string) {
    const props: any = {};
    props[`account:TargetRegion`] = value;
    return this.if(operator || 'StringEquals', props);
  }
}
