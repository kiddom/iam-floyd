import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service inspector
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninspector.html
 */
export class Inspector extends PolicyStatement {
  public servicePrefix = 'inspector';
  public actions: Actions = {
    "AddAttributesToFindings": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_AddAttributesToFindings.html",
      "description": "Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.",
      "accessLevel": "Write"
    },
    "CreateAssessmentTarget": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTarget.html",
      "description": "Creates a new assessment target using the ARN of the resource group that is generated by CreateResourceGroup.",
      "accessLevel": "Write"
    },
    "CreateAssessmentTemplate": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTemplate.html",
      "description": "Creates an assessment template for the assessment target that is specified by the ARN of the assessment target.",
      "accessLevel": "Write"
    },
    "CreateResourceGroup": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateResourceGroup.html",
      "description": "Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.",
      "accessLevel": "Write"
    },
    "DeleteAssessmentRun": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentRun.html",
      "description": "Deletes the assessment run that is specified by the ARN of the assessment run.",
      "accessLevel": "Write"
    },
    "DeleteAssessmentTarget": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTarget.html",
      "description": "Deletes the assessment target that is specified by the ARN of the assessment target.",
      "accessLevel": "Write"
    },
    "DeleteAssessmentTemplate": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTemplate.html",
      "description": "Deletes the assessment template that is specified by the ARN of the assessment template.",
      "accessLevel": "Write"
    },
    "DescribeAssessmentRuns": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentRuns.html",
      "description": "Describes the assessment runs that are specified by the ARNs of the assessment runs.",
      "accessLevel": "Read"
    },
    "DescribeAssessmentTargets": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTargets.html",
      "description": "Describes the assessment targets that are specified by the ARNs of the assessment targets.",
      "accessLevel": "Read"
    },
    "DescribeAssessmentTemplates": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTemplates.html",
      "description": "Describes the assessment templates that are specified by the ARNs of the assessment templates.",
      "accessLevel": "Read"
    },
    "DescribeCrossAccountAccessRole": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeCrossAccountAccessRole.html",
      "description": "Describes the IAM role that enables Amazon Inspector to access your AWS account.",
      "accessLevel": "Read"
    },
    "DescribeFindings": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeFindings.html",
      "description": "Describes the findings that are specified by the ARNs of the findings.",
      "accessLevel": "Read"
    },
    "DescribeResourceGroups": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeResourceGroups.html",
      "description": "Describes the resource groups that are specified by the ARNs of the resource groups.",
      "accessLevel": "Read"
    },
    "DescribeRulesPackages": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeRulesPackages.html",
      "description": "Describes the rules packages that are specified by the ARNs of the rules packages.",
      "accessLevel": "Read"
    },
    "GetTelemetryMetadata": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetTelemetryMetadata.html",
      "description": "Information about the data that is collected for the specified assessment run.",
      "accessLevel": "Read"
    },
    "ListAssessmentRunAgents": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRunAgents.html",
      "description": "Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.",
      "accessLevel": "List"
    },
    "ListAssessmentRuns": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRuns.html",
      "description": "Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.",
      "accessLevel": "List"
    },
    "ListAssessmentTargets": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTargets.html",
      "description": "Lists the ARNs of the assessment targets within this AWS account.",
      "accessLevel": "List"
    },
    "ListAssessmentTemplates": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTemplates.html",
      "description": "Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.",
      "accessLevel": "List"
    },
    "ListEventSubscriptions": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListEventSubscriptions.html",
      "description": "Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template.",
      "accessLevel": "List"
    },
    "ListFindings": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListFindings.html",
      "description": "Lists findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs.",
      "accessLevel": "List"
    },
    "ListRulesPackages": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListRulesPackages.html",
      "description": "Lists all available Amazon Inspector rules packages.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListTagsForResource.html",
      "description": "Lists all tags associated with an assessment template.",
      "accessLevel": "List"
    },
    "PreviewAgents": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_PreviewAgents.html",
      "description": "Previews the agents installed on the EC2 instances that are part of the specified assessment target.",
      "accessLevel": "Read"
    },
    "RegisterCrossAccountAccessRole": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_RegisterCrossAccountAccessRole.html",
      "description": "Registers the IAM role that Amazon Inspector uses to list your EC2 instances at the start of the assessment run or when you call the PreviewAgents action.",
      "accessLevel": "Write"
    },
    "RemoveAttributesFromFindings": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_RemoveAttributesFromFindings.html",
      "description": "Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.",
      "accessLevel": "Write"
    },
    "SetTagsForResource": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_SetTagsForResource.html",
      "description": "Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.",
      "accessLevel": "Tagging"
    },
    "StartAssessmentRun": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_StartAssessmentRun.html",
      "description": "Starts the assessment run specified by the ARN of the assessment template.",
      "accessLevel": "Write"
    },
    "StopAssessmentRun": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_StopAssessmentRun.html",
      "description": "Stops the assessment run that is specified by the ARN of the assessment run.",
      "accessLevel": "Write"
    },
    "SubscribeToEvent": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_SubscribeToEvent.html",
      "description": "Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.",
      "accessLevel": "Write"
    },
    "UnsubscribeFromEvent": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_UnsubscribeFromEvent.html",
      "description": "Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.",
      "accessLevel": "Write"
    },
    "UpdateAssessmentTarget": {
      "url": "https://docs.aws.amazon.com/inspector/latest/APIReference/API_UpdateAssessmentTarget.html",
      "description": "Updates the assessment target that is specified by the ARN of the assessment target.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service inspector
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninspector.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_AddAttributesToFindings.html
   */
  public addAttributesToFindings() {
    this.add('inspector:AddAttributesToFindings');
    return this;
  }

  /**
   * Creates a new assessment target using the ARN of the resource group that is generated by CreateResourceGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTarget.html
   */
  public createAssessmentTarget() {
    this.add('inspector:CreateAssessmentTarget');
    return this;
  }

  /**
   * Creates an assessment template for the assessment target that is specified by the ARN of the assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTemplate.html
   */
  public createAssessmentTemplate() {
    this.add('inspector:CreateAssessmentTemplate');
    return this;
  }

  /**
   * Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateResourceGroup.html
   */
  public createResourceGroup() {
    this.add('inspector:CreateResourceGroup');
    return this;
  }

  /**
   * Deletes the assessment run that is specified by the ARN of the assessment run.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentRun.html
   */
  public deleteAssessmentRun() {
    this.add('inspector:DeleteAssessmentRun');
    return this;
  }

  /**
   * Deletes the assessment target that is specified by the ARN of the assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTarget.html
   */
  public deleteAssessmentTarget() {
    this.add('inspector:DeleteAssessmentTarget');
    return this;
  }

  /**
   * Deletes the assessment template that is specified by the ARN of the assessment template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTemplate.html
   */
  public deleteAssessmentTemplate() {
    this.add('inspector:DeleteAssessmentTemplate');
    return this;
  }

  /**
   * Describes the assessment runs that are specified by the ARNs of the assessment runs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentRuns.html
   */
  public describeAssessmentRuns() {
    this.add('inspector:DescribeAssessmentRuns');
    return this;
  }

  /**
   * Describes the assessment targets that are specified by the ARNs of the assessment targets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTargets.html
   */
  public describeAssessmentTargets() {
    this.add('inspector:DescribeAssessmentTargets');
    return this;
  }

  /**
   * Describes the assessment templates that are specified by the ARNs of the assessment templates.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTemplates.html
   */
  public describeAssessmentTemplates() {
    this.add('inspector:DescribeAssessmentTemplates');
    return this;
  }

  /**
   * Describes the IAM role that enables Amazon Inspector to access your AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeCrossAccountAccessRole.html
   */
  public describeCrossAccountAccessRole() {
    this.add('inspector:DescribeCrossAccountAccessRole');
    return this;
  }

  /**
   * Describes the findings that are specified by the ARNs of the findings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeFindings.html
   */
  public describeFindings() {
    this.add('inspector:DescribeFindings');
    return this;
  }

  /**
   * Describes the resource groups that are specified by the ARNs of the resource groups.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeResourceGroups.html
   */
  public describeResourceGroups() {
    this.add('inspector:DescribeResourceGroups');
    return this;
  }

  /**
   * Describes the rules packages that are specified by the ARNs of the rules packages.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeRulesPackages.html
   */
  public describeRulesPackages() {
    this.add('inspector:DescribeRulesPackages');
    return this;
  }

  /**
   * Information about the data that is collected for the specified assessment run.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetTelemetryMetadata.html
   */
  public getTelemetryMetadata() {
    this.add('inspector:GetTelemetryMetadata');
    return this;
  }

  /**
   * Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRunAgents.html
   */
  public listAssessmentRunAgents() {
    this.add('inspector:ListAssessmentRunAgents');
    return this;
  }

  /**
   * Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRuns.html
   */
  public listAssessmentRuns() {
    this.add('inspector:ListAssessmentRuns');
    return this;
  }

  /**
   * Lists the ARNs of the assessment targets within this AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTargets.html
   */
  public listAssessmentTargets() {
    this.add('inspector:ListAssessmentTargets');
    return this;
  }

  /**
   * Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTemplates.html
   */
  public listAssessmentTemplates() {
    this.add('inspector:ListAssessmentTemplates');
    return this;
  }

  /**
   * Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListEventSubscriptions.html
   */
  public listEventSubscriptions() {
    this.add('inspector:ListEventSubscriptions');
    return this;
  }

  /**
   * Lists findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListFindings.html
   */
  public listFindings() {
    this.add('inspector:ListFindings');
    return this;
  }

  /**
   * Lists all available Amazon Inspector rules packages.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListRulesPackages.html
   */
  public listRulesPackages() {
    this.add('inspector:ListRulesPackages');
    return this;
  }

  /**
   * Lists all tags associated with an assessment template.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('inspector:ListTagsForResource');
    return this;
  }

  /**
   * Previews the agents installed on the EC2 instances that are part of the specified assessment target.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_PreviewAgents.html
   */
  public previewAgents() {
    this.add('inspector:PreviewAgents');
    return this;
  }

  /**
   * Registers the IAM role that Amazon Inspector uses to list your EC2 instances at the start of the assessment run or when you call the PreviewAgents action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_RegisterCrossAccountAccessRole.html
   */
  public registerCrossAccountAccessRole() {
    this.add('inspector:RegisterCrossAccountAccessRole');
    return this;
  }

  /**
   * Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_RemoveAttributesFromFindings.html
   */
  public removeAttributesFromFindings() {
    this.add('inspector:RemoveAttributesFromFindings');
    return this;
  }

  /**
   * Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_SetTagsForResource.html
   */
  public setTagsForResource() {
    this.add('inspector:SetTagsForResource');
    return this;
  }

  /**
   * Starts the assessment run specified by the ARN of the assessment template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_StartAssessmentRun.html
   */
  public startAssessmentRun() {
    this.add('inspector:StartAssessmentRun');
    return this;
  }

  /**
   * Stops the assessment run that is specified by the ARN of the assessment run.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_StopAssessmentRun.html
   */
  public stopAssessmentRun() {
    this.add('inspector:StopAssessmentRun');
    return this;
  }

  /**
   * Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_SubscribeToEvent.html
   */
  public subscribeToEvent() {
    this.add('inspector:SubscribeToEvent');
    return this;
  }

  /**
   * Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_UnsubscribeFromEvent.html
   */
  public unsubscribeFromEvent() {
    this.add('inspector:UnsubscribeFromEvent');
    return this;
  }

  /**
   * Updates the assessment target that is specified by the ARN of the assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_UpdateAssessmentTarget.html
   */
  public updateAssessmentTarget() {
    this.add('inspector:UpdateAssessmentTarget');
    return this;
  }
}
