import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [inspector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Inspector extends PolicyStatement {
  public servicePrefix = 'inspector';

  /**
   * Statement provider for service [inspector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_AddAttributesToFindings.html
   */
  public toAddAttributesToFindings() {
    this.to('AddAttributesToFindings');
    return this;
  }

  /**
   * Creates a new assessment target using the ARN of the resource group that is generated by CreateResourceGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTarget.html
   */
  public toCreateAssessmentTarget() {
    this.to('CreateAssessmentTarget');
    return this;
  }

  /**
   * Creates an assessment template for the assessment target that is specified by the ARN of the assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTemplate.html
   */
  public toCreateAssessmentTemplate() {
    this.to('CreateAssessmentTemplate');
    return this;
  }

  /**
   * Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateResourceGroup.html
   */
  public toCreateResourceGroup() {
    this.to('CreateResourceGroup');
    return this;
  }

  /**
   * Deletes the assessment run that is specified by the ARN of the assessment run.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentRun.html
   */
  public toDeleteAssessmentRun() {
    this.to('DeleteAssessmentRun');
    return this;
  }

  /**
   * Deletes the assessment target that is specified by the ARN of the assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTarget.html
   */
  public toDeleteAssessmentTarget() {
    this.to('DeleteAssessmentTarget');
    return this;
  }

  /**
   * Deletes the assessment template that is specified by the ARN of the assessment template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTemplate.html
   */
  public toDeleteAssessmentTemplate() {
    this.to('DeleteAssessmentTemplate');
    return this;
  }

  /**
   * Describes the assessment runs that are specified by the ARNs of the assessment runs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentRuns.html
   */
  public toDescribeAssessmentRuns() {
    this.to('DescribeAssessmentRuns');
    return this;
  }

  /**
   * Describes the assessment targets that are specified by the ARNs of the assessment targets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTargets.html
   */
  public toDescribeAssessmentTargets() {
    this.to('DescribeAssessmentTargets');
    return this;
  }

  /**
   * Describes the assessment templates that are specified by the ARNs of the assessment templates.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTemplates.html
   */
  public toDescribeAssessmentTemplates() {
    this.to('DescribeAssessmentTemplates');
    return this;
  }

  /**
   * Describes the IAM role that enables Amazon Inspector to access your AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeCrossAccountAccessRole.html
   */
  public toDescribeCrossAccountAccessRole() {
    this.to('DescribeCrossAccountAccessRole');
    return this;
  }

  /**
   * Describes the findings that are specified by the ARNs of the findings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeFindings.html
   */
  public toDescribeFindings() {
    this.to('DescribeFindings');
    return this;
  }

  /**
   * Describes the resource groups that are specified by the ARNs of the resource groups.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeResourceGroups.html
   */
  public toDescribeResourceGroups() {
    this.to('DescribeResourceGroups');
    return this;
  }

  /**
   * Describes the rules packages that are specified by the ARNs of the rules packages.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeRulesPackages.html
   */
  public toDescribeRulesPackages() {
    this.to('DescribeRulesPackages');
    return this;
  }

  /**
   * Information about the data that is collected for the specified assessment run.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetTelemetryMetadata.html
   */
  public toGetTelemetryMetadata() {
    this.to('GetTelemetryMetadata');
    return this;
  }

  /**
   * Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRunAgents.html
   */
  public toListAssessmentRunAgents() {
    this.to('ListAssessmentRunAgents');
    return this;
  }

  /**
   * Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRuns.html
   */
  public toListAssessmentRuns() {
    this.to('ListAssessmentRuns');
    return this;
  }

  /**
   * Lists the ARNs of the assessment targets within this AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTargets.html
   */
  public toListAssessmentTargets() {
    this.to('ListAssessmentTargets');
    return this;
  }

  /**
   * Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTemplates.html
   */
  public toListAssessmentTemplates() {
    this.to('ListAssessmentTemplates');
    return this;
  }

  /**
   * Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListEventSubscriptions.html
   */
  public toListEventSubscriptions() {
    this.to('ListEventSubscriptions');
    return this;
  }

  /**
   * Lists findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListFindings.html
   */
  public toListFindings() {
    this.to('ListFindings');
    return this;
  }

  /**
   * Lists all available Amazon Inspector rules packages.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListRulesPackages.html
   */
  public toListRulesPackages() {
    this.to('ListRulesPackages');
    return this;
  }

  /**
   * Lists all tags associated with an assessment template.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Previews the agents installed on the EC2 instances that are part of the specified assessment target.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_PreviewAgents.html
   */
  public toPreviewAgents() {
    this.to('PreviewAgents');
    return this;
  }

  /**
   * Registers the IAM role that Amazon Inspector uses to list your EC2 instances at the start of the assessment run or when you call the PreviewAgents action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_RegisterCrossAccountAccessRole.html
   */
  public toRegisterCrossAccountAccessRole() {
    this.to('RegisterCrossAccountAccessRole');
    return this;
  }

  /**
   * Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_RemoveAttributesFromFindings.html
   */
  public toRemoveAttributesFromFindings() {
    this.to('RemoveAttributesFromFindings');
    return this;
  }

  /**
   * Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_SetTagsForResource.html
   */
  public toSetTagsForResource() {
    this.to('SetTagsForResource');
    return this;
  }

  /**
   * Starts the assessment run specified by the ARN of the assessment template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_StartAssessmentRun.html
   */
  public toStartAssessmentRun() {
    this.to('StartAssessmentRun');
    return this;
  }

  /**
   * Stops the assessment run that is specified by the ARN of the assessment run.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_StopAssessmentRun.html
   */
  public toStopAssessmentRun() {
    this.to('StopAssessmentRun');
    return this;
  }

  /**
   * Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_SubscribeToEvent.html
   */
  public toSubscribeToEvent() {
    this.to('SubscribeToEvent');
    return this;
  }

  /**
   * Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_UnsubscribeFromEvent.html
   */
  public toUnsubscribeFromEvent() {
    this.to('UnsubscribeFromEvent');
    return this;
  }

  /**
   * Updates the assessment target that is specified by the ARN of the assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_UpdateAssessmentTarget.html
   */
  public toUpdateAssessmentTarget() {
    this.to('UpdateAssessmentTarget');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddAttributesToFindings",
      "CreateAssessmentTarget",
      "CreateAssessmentTemplate",
      "CreateResourceGroup",
      "DeleteAssessmentRun",
      "DeleteAssessmentTarget",
      "DeleteAssessmentTemplate",
      "RegisterCrossAccountAccessRole",
      "RemoveAttributesFromFindings",
      "StartAssessmentRun",
      "StopAssessmentRun",
      "SubscribeToEvent",
      "UnsubscribeFromEvent",
      "UpdateAssessmentTarget"
    ],
    "Read": [
      "DescribeAssessmentRuns",
      "DescribeAssessmentTargets",
      "DescribeAssessmentTemplates",
      "DescribeCrossAccountAccessRole",
      "DescribeFindings",
      "DescribeResourceGroups",
      "DescribeRulesPackages",
      "GetTelemetryMetadata",
      "PreviewAgents"
    ],
    "List": [
      "ListAssessmentRunAgents",
      "ListAssessmentRuns",
      "ListAssessmentTargets",
      "ListAssessmentTemplates",
      "ListEventSubscriptions",
      "ListFindings",
      "ListRulesPackages",
      "ListTagsForResource"
    ],
    "Tagging": [
      "SetTagsForResource"
    ]
  };
}
