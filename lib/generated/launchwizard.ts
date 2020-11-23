import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_launchwizard.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Launchwizard extends PolicyStatement {
  public servicePrefix = 'launchwizard';

  /**
   * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_launchwizard.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDeleteApp() {
    this.to('DeleteApp');
    return this;
  }

  /**
   * Describe provisioning applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeProvisionedApp() {
    this.to('DescribeProvisionedApp');
    return this;
  }

  /**
   * Describe provisioning events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeProvisioningEvents() {
    this.to('DescribeProvisioningEvents');
    return this;
  }

  /**
   * Get infrastructure suggestion
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetInfrastructureSuggestion() {
    this.to('GetInfrastructureSuggestion');
    return this;
  }

  /**
   * Get customer's ip address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetIpAddress() {
    this.to('GetIpAddress');
    return this;
  }

  /**
   * Get resource cost estimate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetResourceCostEstimate() {
    this.to('GetResourceCostEstimate');
    return this;
  }

  /**
   * List provisioning applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toListProvisionedApps() {
    this.to('ListProvisionedApps');
    return this;
  }

  /**
   * Start a provisioning
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toStartProvisioning() {
    this.to('StartProvisioning');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "DeleteApp",
      "StartProvisioning"
    ],
    "Read": [
      "DescribeProvisionedApp",
      "DescribeProvisioningEvents",
      "GetInfrastructureSuggestion",
      "GetIpAddress",
      "GetResourceCostEstimate"
    ],
    "List": [
      "ListProvisionedApps"
    ]
  };
}
