import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [iam](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iam extends PolicyStatement {
  public servicePrefix = 'iam';

  /**
   * Statement provider for service [iam](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a new client ID (audience) to the list of registered IDs for the specified IAM OpenID Connect (OIDC) provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html
   */
  public toAddClientIDToOpenIDConnectProvider() {
    this.to('iam:AddClientIDToOpenIDConnectProvider');
    return this;
  }

  /**
   * Grants permission to add an IAM role to the specified instance profile
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html
   */
  public toAddRoleToInstanceProfile() {
    this.to('iam:AddRoleToInstanceProfile');
    return this;
  }

  /**
   * Grants permission to add an IAM user to the specified IAM group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html
   */
  public toAddUserToGroup() {
    this.to('iam:AddUserToGroup');
    return this;
  }

  /**
   * Grants permission to attach a managed policy to the specified IAM group
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html
   */
  public toAttachGroupPolicy() {
    this.to('iam:AttachGroupPolicy');
    return this;
  }

  /**
   * Grants permission to attach a managed policy to the specified IAM role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html
   */
  public toAttachRolePolicy() {
    this.to('iam:AttachRolePolicy');
    return this;
  }

  /**
   * Grants permission to attach a managed policy to the specified IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html
   */
  public toAttachUserPolicy() {
    this.to('iam:AttachUserPolicy');
    return this;
  }

  /**
   * Grants permission for an IAM user to to change their own password
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html
   */
  public toChangePassword() {
    this.to('iam:ChangePassword');
    return this;
  }

  /**
   * Grants permission to create access key and secret access key for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html
   */
  public toCreateAccessKey() {
    this.to('iam:CreateAccessKey');
    return this;
  }

  /**
   * Grants permission to create an alias for your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html
   */
  public toCreateAccountAlias() {
    this.to('iam:CreateAccountAlias');
    return this;
  }

  /**
   * Grants permission to create a new group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    this.to('iam:CreateGroup');
    return this;
  }

  /**
   * Grants permission to create a new instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html
   */
  public toCreateInstanceProfile() {
    this.to('iam:CreateInstanceProfile');
    return this;
  }

  /**
   * Grants permission to create a password for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html
   */
  public toCreateLoginProfile() {
    this.to('iam:CreateLoginProfile');
    return this;
  }

  /**
   * Grants permission to create an IAM resource that describes an identity provider (IdP) that supports OpenID Connect (OIDC)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html
   */
  public toCreateOpenIDConnectProvider() {
    this.to('iam:CreateOpenIDConnectProvider');
    return this;
  }

  /**
   * Grants permission to create a new managed policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html
   */
  public toCreatePolicy() {
    this.to('iam:CreatePolicy');
    return this;
  }

  /**
   * Grants permission to create a new version of the specified managed policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html
   */
  public toCreatePolicyVersion() {
    this.to('iam:CreatePolicyVersion');
    return this;
  }

  /**
   * Grants permission to create a new role
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html
   */
  public toCreateRole() {
    this.to('iam:CreateRole');
    return this;
  }

  /**
   * Grants permission to create an IAM resource that describes an identity provider (IdP) that supports SAML 2.0
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html
   */
  public toCreateSAMLProvider() {
    this.to('iam:CreateSAMLProvider');
    return this;
  }

  /**
   * Grants permission to create an IAM role that allows an AWS service to perform actions on your behalf
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAWSServiceName()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html
   */
  public toCreateServiceLinkedRole() {
    this.to('iam:CreateServiceLinkedRole');
    return this;
  }

  /**
   * Grants permission to create a new service-specific credential for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html
   */
  public toCreateServiceSpecificCredential() {
    this.to('iam:CreateServiceSpecificCredential');
    return this;
  }

  /**
   * Grants permission to create a new IAM user
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('iam:CreateUser');
    return this;
  }

  /**
   * Grants permission to create a new virtual MFA device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html
   */
  public toCreateVirtualMFADevice() {
    this.to('iam:CreateVirtualMFADevice');
    return this;
  }

  /**
   * Grants permission to deactivate the specified MFA device and remove its association with the IAM user for which it was originally enabled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html
   */
  public toDeactivateMFADevice() {
    this.to('iam:DeactivateMFADevice');
    return this;
  }

  /**
   * Grants permission to delete the access key pair that is associated with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html
   */
  public toDeleteAccessKey() {
    this.to('iam:DeleteAccessKey');
    return this;
  }

  /**
   * Grants permission to delete the specified AWS account alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html
   */
  public toDeleteAccountAlias() {
    this.to('iam:DeleteAccountAlias');
    return this;
  }

  /**
   * Grants permission to delete the password policy for the AWS account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountPasswordPolicy.html
   */
  public toDeleteAccountPasswordPolicy() {
    this.to('iam:DeleteAccountPasswordPolicy');
    return this;
  }

  /**
   * Grants permission to delete the specified IAM group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    this.to('iam:DeleteGroup');
    return this;
  }

  /**
   * Grants permission to delete the specified inline policy from its group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html
   */
  public toDeleteGroupPolicy() {
    this.to('iam:DeleteGroupPolicy');
    return this;
  }

  /**
   * Grants permission to delete the specified instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html
   */
  public toDeleteInstanceProfile() {
    this.to('iam:DeleteInstanceProfile');
    return this;
  }

  /**
   * Grants permission to delete the password for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html
   */
  public toDeleteLoginProfile() {
    this.to('iam:DeleteLoginProfile');
    return this;
  }

  /**
   * Grants permission to delete an OpenID Connect identity provider (IdP) resource object in IAM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html
   */
  public toDeleteOpenIDConnectProvider() {
    this.to('iam:DeleteOpenIDConnectProvider');
    return this;
  }

  /**
   * Grants permission to delete the specified managed policy and remove it from any IAM entities (users, groups, or roles) to which it is attached
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    this.to('iam:DeletePolicy');
    return this;
  }

  /**
   * Grants permission to delete a version from the specified managed policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html
   */
  public toDeletePolicyVersion() {
    this.to('iam:DeletePolicyVersion');
    return this;
  }

  /**
   * Grants permission to delete the specified role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html
   */
  public toDeleteRole() {
    this.to('iam:DeleteRole');
    return this;
  }

  /**
   * Grants permission to remove the permissions boundary from a role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePermissionsBoundary.html
   */
  public toDeleteRolePermissionsBoundary() {
    this.to('iam:DeleteRolePermissionsBoundary');
    return this;
  }

  /**
   * Grants permission to delete the specified inline policy from the specified role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html
   */
  public toDeleteRolePolicy() {
    this.to('iam:DeleteRolePolicy');
    return this;
  }

  /**
   * Grants permission to delete a SAML provider resource in IAM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html
   */
  public toDeleteSAMLProvider() {
    this.to('iam:DeleteSAMLProvider');
    return this;
  }

  /**
   * Grants permission to delete the specified SSH public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html
   */
  public toDeleteSSHPublicKey() {
    this.to('iam:DeleteSSHPublicKey');
    return this;
  }

  /**
   * Grants permission to delete the specified server certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServerCertificate.html
   */
  public toDeleteServerCertificate() {
    this.to('iam:DeleteServerCertificate');
    return this;
  }

  /**
   * Grants permission to delete an IAM role that is linked to a specific AWS service, if the service is no longer using it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html
   */
  public toDeleteServiceLinkedRole() {
    this.to('iam:DeleteServiceLinkedRole');
    return this;
  }

  /**
   * Grants permission to delete the specified service-specific credential for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html
   */
  public toDeleteServiceSpecificCredential() {
    this.to('iam:DeleteServiceSpecificCredential');
    return this;
  }

  /**
   * Grants permission to delete a signing certificate that is associated with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html
   */
  public toDeleteSigningCertificate() {
    this.to('iam:DeleteSigningCertificate');
    return this;
  }

  /**
   * Grants permission to delete the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('iam:DeleteUser');
    return this;
  }

  /**
   * Grants permission to remove the permissions boundary from the specified IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPermissionsBoundary.html
   */
  public toDeleteUserPermissionsBoundary() {
    this.to('iam:DeleteUserPermissionsBoundary');
    return this;
  }

  /**
   * Grants permission to delete the specified inline policy from an IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html
   */
  public toDeleteUserPolicy() {
    this.to('iam:DeleteUserPolicy');
    return this;
  }

  /**
   * Grants permission to delete a virtual MFA device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html
   */
  public toDeleteVirtualMFADevice() {
    this.to('iam:DeleteVirtualMFADevice');
    return this;
  }

  /**
   * Grants permission to detach a managed policy from the specified IAM group
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html
   */
  public toDetachGroupPolicy() {
    this.to('iam:DetachGroupPolicy');
    return this;
  }

  /**
   * Grants permission to detach a managed policy from the specified role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html
   */
  public toDetachRolePolicy() {
    this.to('iam:DetachRolePolicy');
    return this;
  }

  /**
   * Grants permission to detach a managed policy from the specified IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPolicyARN()
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html
   */
  public toDetachUserPolicy() {
    this.to('iam:DetachUserPolicy');
    return this;
  }

  /**
   * Grants permission to enable an MFA device and associate it with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html
   */
  public toEnableMFADevice() {
    this.to('iam:EnableMFADevice');
    return this;
  }

  /**
   * Grants permission to generate a credential report for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html
   */
  public toGenerateCredentialReport() {
    this.to('iam:GenerateCredentialReport');
    return this;
  }

  /**
   * Grants permission to generate an access report for an AWS Organizations entity
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifOrganizationsPolicyId()
   *
   * Dependent actions:
   * - organizations:DescribePolicy
   * - organizations:ListChildren
   * - organizations:ListParents
   * - organizations:ListPoliciesForTarget
   * - organizations:ListRoots
   * - organizations:ListTargetsForPolicy
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html
   */
  public toGenerateOrganizationsAccessReport() {
    this.to('iam:GenerateOrganizationsAccessReport');
    return this;
  }

  /**
   * Grants permission to generate a service last accessed data report for an IAM resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html
   */
  public toGenerateServiceLastAccessedDetails() {
    this.to('iam:GenerateServiceLastAccessedDetails');
    return this;
  }

  /**
   * Grants permission to retrieve information about when the specified access key was last used
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html
   */
  public toGetAccessKeyLastUsed() {
    this.to('iam:GetAccessKeyLastUsed');
    return this;
  }

  /**
   * Grants permission to retrieve information about all IAM users, groups, roles, and policies in your AWS account, including their relationships to one another
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html
   */
  public toGetAccountAuthorizationDetails() {
    this.to('iam:GetAccountAuthorizationDetails');
    return this;
  }

  /**
   * Grants permission to retrieve the password policy for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html
   */
  public toGetAccountPasswordPolicy() {
    this.to('iam:GetAccountPasswordPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve information about IAM entity usage and IAM quotas in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html
   */
  public toGetAccountSummary() {
    this.to('iam:GetAccountSummary');
    return this;
  }

  /**
   * Grants permission to retrieve a list of all of the context keys that are referenced in the specified policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html
   */
  public toGetContextKeysForCustomPolicy() {
    this.to('iam:GetContextKeysForCustomPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve a list of all context keys that are referenced in all IAM policies that are attached to the specified IAM identity (user, group, or role)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html
   */
  public toGetContextKeysForPrincipalPolicy() {
    this.to('iam:GetContextKeysForPrincipalPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve a credential report for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html
   */
  public toGetCredentialReport() {
    this.to('iam:GetCredentialReport');
    return this;
  }

  /**
   * Grants permission to retrieve a list of IAM users in the specified IAM group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html
   */
  public toGetGroup() {
    this.to('iam:GetGroup');
    return this;
  }

  /**
   * Grants permission to retrieve an inline policy document that is embedded in the specified IAM group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html
   */
  public toGetGroupPolicy() {
    this.to('iam:GetGroupPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified instance profile, including the instance profile's path, GUID, ARN, and role
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html
   */
  public toGetInstanceProfile() {
    this.to('iam:GetInstanceProfile');
    return this;
  }

  /**
   * Grants permission to retrieve the user name and password creation date for the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html
   */
  public toGetLoginProfile() {
    this.to('iam:GetLoginProfile');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified OpenID Connect (OIDC) provider resource in IAM
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html
   */
  public toGetOpenIDConnectProvider() {
    this.to('iam:GetOpenIDConnectProvider');
    return this;
  }

  /**
   * Grants permission to retrieve an AWS Organizations access report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html
   */
  public toGetOrganizationsAccessReport() {
    this.to('iam:GetOrganizationsAccessReport');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified managed policy, including the policy's default version and the total number of identities to which the policy is attached
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html
   */
  public toGetPolicy() {
    this.to('iam:GetPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve information about a version of the specified managed policy, including the policy document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html
   */
  public toGetPolicyVersion() {
    this.to('iam:GetPolicyVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified role, including the role's path, GUID, ARN, and the role's trust policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html
   */
  public toGetRole() {
    this.to('iam:GetRole');
    return this;
  }

  /**
   * Grants permission to retrieve an inline policy document that is embedded with the specified IAM role
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html
   */
  public toGetRolePolicy() {
    this.to('iam:GetRolePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the SAML provider metadocument that was uploaded when the IAM SAML provider resource was created or updated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html
   */
  public toGetSAMLProvider() {
    this.to('iam:GetSAMLProvider');
    return this;
  }

  /**
   * Grants permission to retrieve the specified SSH public key, including metadata about the key
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html
   */
  public toGetSSHPublicKey() {
    this.to('iam:GetSSHPublicKey');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified server certificate stored in IAM
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html
   */
  public toGetServerCertificate() {
    this.to('iam:GetServerCertificate');
    return this;
  }

  /**
   * Grants permission to retrieve information about the service last accessed data report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html
   */
  public toGetServiceLastAccessedDetails() {
    this.to('iam:GetServiceLastAccessedDetails');
    return this;
  }

  /**
   * Grants permission to retrieve information about the entities from the service last accessed data report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html
   */
  public toGetServiceLastAccessedDetailsWithEntities() {
    this.to('iam:GetServiceLastAccessedDetailsWithEntities');
    return this;
  }

  /**
   * Grants permission to retrieve an IAM service-linked role deletion status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html
   */
  public toGetServiceLinkedRoleDeletionStatus() {
    this.to('iam:GetServiceLinkedRoleDeletionStatus');
    return this;
  }

  /**
   * Grants permission to retrieve information about the specified IAM user, including the user's creation date, path, unique ID, and ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html
   */
  public toGetUser() {
    this.to('iam:GetUser');
    return this;
  }

  /**
   * Grants permission to retrieve an inline policy document that is embedded in the specified IAM user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html
   */
  public toGetUserPolicy() {
    this.to('iam:GetUserPolicy');
    return this;
  }

  /**
   * Grants permission to list information about the access key IDs that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html
   */
  public toListAccessKeys() {
    this.to('iam:ListAccessKeys');
    return this;
  }

  /**
   * Grants permission to list the account alias that is associated with the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html
   */
  public toListAccountAliases() {
    this.to('iam:ListAccountAliases');
    return this;
  }

  /**
   * Grants permission to list all managed policies that are attached to the specified IAM group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html
   */
  public toListAttachedGroupPolicies() {
    this.to('iam:ListAttachedGroupPolicies');
    return this;
  }

  /**
   * Grants permission to list all managed policies that are attached to the specified IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html
   */
  public toListAttachedRolePolicies() {
    this.to('iam:ListAttachedRolePolicies');
    return this;
  }

  /**
   * Grants permission to list all managed policies that are attached to the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html
   */
  public toListAttachedUserPolicies() {
    this.to('iam:ListAttachedUserPolicies');
    return this;
  }

  /**
   * Grants permission to list all IAM identities to which the specified managed policy is attached
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html
   */
  public toListEntitiesForPolicy() {
    this.to('iam:ListEntitiesForPolicy');
    return this;
  }

  /**
   * Grants permission to list the names of the inline policies that are embedded in the specified IAM group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html
   */
  public toListGroupPolicies() {
    this.to('iam:ListGroupPolicies');
    return this;
  }

  /**
   * Grants permission to list the IAM groups that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    this.to('iam:ListGroups');
    return this;
  }

  /**
   * Grants permission to list the IAM groups that the specified IAM user belongs to
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html
   */
  public toListGroupsForUser() {
    this.to('iam:ListGroupsForUser');
    return this;
  }

  /**
   * Grants permission to list the instance profiles that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html
   */
  public toListInstanceProfiles() {
    this.to('iam:ListInstanceProfiles');
    return this;
  }

  /**
   * Grants permission to list the instance profiles that have the specified associated IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html
   */
  public toListInstanceProfilesForRole() {
    this.to('iam:ListInstanceProfilesForRole');
    return this;
  }

  /**
   * Grants permission to list the MFA devices for an IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html
   */
  public toListMFADevices() {
    this.to('iam:ListMFADevices');
    return this;
  }

  /**
   * Grants permission to list information about the IAM OpenID Connect (OIDC) provider resource objects that are defined in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html
   */
  public toListOpenIDConnectProviders() {
    this.to('iam:ListOpenIDConnectProviders');
    return this;
  }

  /**
   * Grants permission to list all managed policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html
   */
  public toListPolicies() {
    this.to('iam:ListPolicies');
    return this;
  }

  /**
   * Grants permission to list information about the policies that grant an entity access to a specific service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html
   */
  public toListPoliciesGrantingServiceAccess() {
    this.to('iam:ListPoliciesGrantingServiceAccess');
    return this;
  }

  /**
   * Grants permission to list information about the versions of the specified managed policy, including the version that is currently set as the policy's default version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html
   */
  public toListPolicyVersions() {
    this.to('iam:ListPolicyVersions');
    return this;
  }

  /**
   * Grants permission to list the names of the inline policies that are embedded in the specified IAM role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html
   */
  public toListRolePolicies() {
    this.to('iam:ListRolePolicies');
    return this;
  }

  /**
   * Grants permission to list the tags that are attached to the specified IAM role.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html
   */
  public toListRoleTags() {
    this.to('iam:ListRoleTags');
    return this;
  }

  /**
   * Grants permission to list the IAM roles that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html
   */
  public toListRoles() {
    this.to('iam:ListRoles');
    return this;
  }

  /**
   * Grants permission to list the SAML provider resources in IAM
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html
   */
  public toListSAMLProviders() {
    this.to('iam:ListSAMLProviders');
    return this;
  }

  /**
   * Grants permission to list information about the SSH public keys that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html
   */
  public toListSSHPublicKeys() {
    this.to('iam:ListSSHPublicKeys');
    return this;
  }

  /**
   * Grants permission to list the server certificates that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html
   */
  public toListServerCertificates() {
    this.to('iam:ListServerCertificates');
    return this;
  }

  /**
   * Grants permission to list the service-specific credentials that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html
   */
  public toListServiceSpecificCredentials() {
    this.to('iam:ListServiceSpecificCredentials');
    return this;
  }

  /**
   * Grants permission to list information about the signing certificates that are associated with the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html
   */
  public toListSigningCertificates() {
    this.to('iam:ListSigningCertificates');
    return this;
  }

  /**
   * Grants permission to list the names of the inline policies that are embedded in the specified IAM user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html
   */
  public toListUserPolicies() {
    this.to('iam:ListUserPolicies');
    return this;
  }

  /**
   * Grants permission to list the tags that are attached to the specified IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html
   */
  public toListUserTags() {
    this.to('iam:ListUserTags');
    return this;
  }

  /**
   * Grants permission to list the IAM users that have the specified path prefix
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    this.to('iam:ListUsers');
    return this;
  }

  /**
   * Grants permission to list virtual MFA devices by assignment status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html
   */
  public toListVirtualMFADevices() {
    this.to('iam:ListVirtualMFADevices');
    return this;
  }

  /**
   * Grants permission to pass a role to a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAssociatedResourceArn()
   * - .ifPassedToService()
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html
   */
  public toPassRole() {
    this.to('iam:PassRole');
    return this;
  }

  /**
   * Grants permission to create or update an inline policy document that is embedded in the specified IAM group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html
   */
  public toPutGroupPolicy() {
    this.to('iam:PutGroupPolicy');
    return this;
  }

  /**
   * Grants permission to set a managed policy as a permissions boundary for a role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePermissionsBoundary.html
   */
  public toPutRolePermissionsBoundary() {
    this.to('iam:PutRolePermissionsBoundary');
    return this;
  }

  /**
   * Grants permission to create or update an inline policy document that is embedded in the specified IAM role
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html
   */
  public toPutRolePolicy() {
    this.to('iam:PutRolePolicy');
    return this;
  }

  /**
   * Grants permission to set a managed policy as a permissions boundary for an IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPermissionsBoundary.html
   */
  public toPutUserPermissionsBoundary() {
    this.to('iam:PutUserPermissionsBoundary');
    return this;
  }

  /**
   * Grants permission to create or update an inline policy document that is embedded in the specified IAM user
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPermissionsBoundary()
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html
   */
  public toPutUserPolicy() {
    this.to('iam:PutUserPolicy');
    return this;
  }

  /**
   * Grants permission to remove the client ID (audience) from the list of client IDs in the specified IAM OpenID Connect (OIDC) provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html
   */
  public toRemoveClientIDFromOpenIDConnectProvider() {
    this.to('iam:RemoveClientIDFromOpenIDConnectProvider');
    return this;
  }

  /**
   * Grants permission to remove an IAM role from the specified EC2 instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html
   */
  public toRemoveRoleFromInstanceProfile() {
    this.to('iam:RemoveRoleFromInstanceProfile');
    return this;
  }

  /**
   * Grants permission to remove an IAM user from the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html
   */
  public toRemoveUserFromGroup() {
    this.to('iam:RemoveUserFromGroup');
    return this;
  }

  /**
   * Grants permission to reset the password for an existing service-specific credential for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html
   */
  public toResetServiceSpecificCredential() {
    this.to('iam:ResetServiceSpecificCredential');
    return this;
  }

  /**
   * Grants permission to synchronize the specified MFA device with its IAM entity (user or role)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResyncMFADevice.html
   */
  public toResyncMFADevice() {
    this.to('iam:ResyncMFADevice');
    return this;
  }

  /**
   * Grants permission to set the version of the specified policy as the policy's default version
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html
   */
  public toSetDefaultPolicyVersion() {
    this.to('iam:SetDefaultPolicyVersion');
    return this;
  }

  /**
   * Grants permission to set the STS global endpoint token version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html
   */
  public toSetSecurityTokenServicePreferences() {
    this.to('iam:SetSecurityTokenServicePreferences');
    return this;
  }

  /**
   * Grants permission to simulate whether an identity-based policy or resource-based policy provides permissions for specific API operations and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html
   */
  public toSimulateCustomPolicy() {
    this.to('iam:SimulateCustomPolicy');
    return this;
  }

  /**
   * Grants permission to simulate whether an identity-based policy that is attached to a specified IAM entity (user or role) provides permissions for specific API operations and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html
   */
  public toSimulatePrincipalPolicy() {
    this.to('iam:SimulatePrincipalPolicy');
    return this;
  }

  /**
   * Grants permission to add tags to an IAM role.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html
   */
  public toTagRole() {
    this.to('iam:TagRole');
    return this;
  }

  /**
   * Grants permission to add tags to an IAM user.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html
   */
  public toTagUser() {
    this.to('iam:TagUser');
    return this;
  }

  /**
   * Grants permission to remove the specified tags from the role.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html
   */
  public toUntagRole() {
    this.to('iam:UntagRole');
    return this;
  }

  /**
   * Grants permission to remove the specified tags from the user.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html
   */
  public toUntagUser() {
    this.to('iam:UntagUser');
    return this;
  }

  /**
   * Grants permission to update the status of the specified access key as Active or Inactive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html
   */
  public toUpdateAccessKey() {
    this.to('iam:UpdateAccessKey');
    return this;
  }

  /**
   * Grants permission to update the password policy settings for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html
   */
  public toUpdateAccountPasswordPolicy() {
    this.to('iam:UpdateAccountPasswordPolicy');
    return this;
  }

  /**
   * Grants permission to update the policy that grants an IAM entity permission to assume a role
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html
   */
  public toUpdateAssumeRolePolicy() {
    this.to('iam:UpdateAssumeRolePolicy');
    return this;
  }

  /**
   * Grants permission to update the name or path of the specified IAM group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    this.to('iam:UpdateGroup');
    return this;
  }

  /**
   * Grants permission to change the password for the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html
   */
  public toUpdateLoginProfile() {
    this.to('iam:UpdateLoginProfile');
    return this;
  }

  /**
   * Grants permission to update the entire list of server certificate thumbprints that are associated with an OpenID Connect (OIDC) provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html
   */
  public toUpdateOpenIDConnectProviderThumbprint() {
    this.to('iam:UpdateOpenIDConnectProviderThumbprint');
    return this;
  }

  /**
   * Grants permission to update the description or maximum session duration setting of a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html
   */
  public toUpdateRole() {
    this.to('iam:UpdateRole');
    return this;
  }

  /**
   * Grants permission to update only the description of a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html
   */
  public toUpdateRoleDescription() {
    this.to('iam:UpdateRoleDescription');
    return this;
  }

  /**
   * Grants permission to update the metadata document for an existing SAML provider resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html
   */
  public toUpdateSAMLProvider() {
    this.to('iam:UpdateSAMLProvider');
    return this;
  }

  /**
   * Grants permission to update the status of an IAM user's SSH public key to active or inactive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html
   */
  public toUpdateSSHPublicKey() {
    this.to('iam:UpdateSSHPublicKey');
    return this;
  }

  /**
   * Grants permission to update the name or the path of the specified server certificate stored in IAM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServerCertificate.html
   */
  public toUpdateServerCertificate() {
    this.to('iam:UpdateServerCertificate');
    return this;
  }

  /**
   * Grants permission to update the status of a service-specific credential to active or inactive for an IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html
   */
  public toUpdateServiceSpecificCredential() {
    this.to('iam:UpdateServiceSpecificCredential');
    return this;
  }

  /**
   * Grants permission to update the status of the specified user signing certificate to active or disabled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html
   */
  public toUpdateSigningCertificate() {
    this.to('iam:UpdateSigningCertificate');
    return this;
  }

  /**
   * Grants permission to update the name or the path of the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    this.to('iam:UpdateUser');
    return this;
  }

  /**
   * Grants permission to upload an SSH public key and associate it with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html
   */
  public toUploadSSHPublicKey() {
    this.to('iam:UploadSSHPublicKey');
    return this;
  }

  /**
   * Grants permission to upload a server certificate entity for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html
   */
  public toUploadServerCertificate() {
    this.to('iam:UploadServerCertificate');
    return this;
  }

  /**
   * Grants permission to upload an X.509 signing certificate and associate it with the specified IAM user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html
   */
  public toUploadSigningCertificate() {
    this.to('iam:UploadSigningCertificate');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddClientIDToOpenIDConnectProvider",
      "AddRoleToInstanceProfile",
      "AddUserToGroup",
      "ChangePassword",
      "CreateAccessKey",
      "CreateAccountAlias",
      "CreateGroup",
      "CreateInstanceProfile",
      "CreateLoginProfile",
      "CreateOpenIDConnectProvider",
      "CreateRole",
      "CreateSAMLProvider",
      "CreateServiceLinkedRole",
      "CreateServiceSpecificCredential",
      "CreateUser",
      "CreateVirtualMFADevice",
      "DeactivateMFADevice",
      "DeleteAccessKey",
      "DeleteAccountAlias",
      "DeleteGroup",
      "DeleteInstanceProfile",
      "DeleteLoginProfile",
      "DeleteOpenIDConnectProvider",
      "DeleteRole",
      "DeleteSAMLProvider",
      "DeleteSSHPublicKey",
      "DeleteServerCertificate",
      "DeleteServiceLinkedRole",
      "DeleteServiceSpecificCredential",
      "DeleteSigningCertificate",
      "DeleteUser",
      "DeleteVirtualMFADevice",
      "EnableMFADevice",
      "PassRole",
      "RemoveClientIDFromOpenIDConnectProvider",
      "RemoveRoleFromInstanceProfile",
      "RemoveUserFromGroup",
      "ResetServiceSpecificCredential",
      "ResyncMFADevice",
      "SetSecurityTokenServicePreferences",
      "UpdateAccessKey",
      "UpdateAccountPasswordPolicy",
      "UpdateGroup",
      "UpdateLoginProfile",
      "UpdateOpenIDConnectProviderThumbprint",
      "UpdateRole",
      "UpdateRoleDescription",
      "UpdateSAMLProvider",
      "UpdateSSHPublicKey",
      "UpdateServerCertificate",
      "UpdateServiceSpecificCredential",
      "UpdateSigningCertificate",
      "UpdateUser",
      "UploadSSHPublicKey",
      "UploadServerCertificate",
      "UploadSigningCertificate"
    ],
    "Permissions management": [
      "AttachGroupPolicy",
      "AttachRolePolicy",
      "AttachUserPolicy",
      "CreatePolicy",
      "CreatePolicyVersion",
      "DeleteAccountPasswordPolicy",
      "DeleteGroupPolicy",
      "DeletePolicy",
      "DeletePolicyVersion",
      "DeleteRolePermissionsBoundary",
      "DeleteRolePolicy",
      "DeleteUserPermissionsBoundary",
      "DeleteUserPolicy",
      "DetachGroupPolicy",
      "DetachRolePolicy",
      "DetachUserPolicy",
      "PutGroupPolicy",
      "PutRolePermissionsBoundary",
      "PutRolePolicy",
      "PutUserPermissionsBoundary",
      "PutUserPolicy",
      "SetDefaultPolicyVersion",
      "UpdateAssumeRolePolicy"
    ],
    "Read": [
      "GenerateCredentialReport",
      "GenerateOrganizationsAccessReport",
      "GenerateServiceLastAccessedDetails",
      "GetAccessKeyLastUsed",
      "GetAccountAuthorizationDetails",
      "GetAccountPasswordPolicy",
      "GetContextKeysForCustomPolicy",
      "GetContextKeysForPrincipalPolicy",
      "GetCredentialReport",
      "GetGroup",
      "GetGroupPolicy",
      "GetInstanceProfile",
      "GetOpenIDConnectProvider",
      "GetOrganizationsAccessReport",
      "GetPolicy",
      "GetPolicyVersion",
      "GetRole",
      "GetRolePolicy",
      "GetSAMLProvider",
      "GetSSHPublicKey",
      "GetServerCertificate",
      "GetServiceLastAccessedDetails",
      "GetServiceLastAccessedDetailsWithEntities",
      "GetServiceLinkedRoleDeletionStatus",
      "GetUser",
      "GetUserPolicy",
      "SimulateCustomPolicy",
      "SimulatePrincipalPolicy"
    ],
    "List": [
      "GetAccountSummary",
      "GetLoginProfile",
      "ListAccessKeys",
      "ListAccountAliases",
      "ListAttachedGroupPolicies",
      "ListAttachedRolePolicies",
      "ListAttachedUserPolicies",
      "ListEntitiesForPolicy",
      "ListGroupPolicies",
      "ListGroups",
      "ListGroupsForUser",
      "ListInstanceProfiles",
      "ListInstanceProfilesForRole",
      "ListMFADevices",
      "ListOpenIDConnectProviders",
      "ListPolicies",
      "ListPoliciesGrantingServiceAccess",
      "ListPolicyVersions",
      "ListRolePolicies",
      "ListRoleTags",
      "ListRoles",
      "ListSAMLProviders",
      "ListSSHPublicKeys",
      "ListServerCertificates",
      "ListServiceSpecificCredentials",
      "ListSigningCertificates",
      "ListUserPolicies",
      "ListUserTags",
      "ListUsers",
      "ListVirtualMFADevices"
    ],
    "Tagging": [
      "TagRole",
      "TagUser",
      "UntagRole",
      "UntagUser"
    ]
  };

  /**
   * Adds a resource of type access-report to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html
   *
   * @param entityPath - Identifier for the entityPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccessReport(entityPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:access-report/${EntityPath}';
    arn = arn.replace('${EntityPath}', entityPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type assumed-role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
   *
   * @param roleName - Identifier for the roleName.
   * @param roleSessionName - Identifier for the roleSessionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssumedRole(roleName: string, roleSessionName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:assumed-role/${RoleName}/${RoleSessionName}';
    arn = arn.replace('${RoleName}', roleName);
    arn = arn.replace('${RoleSessionName}', roleSessionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type federated-user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html
   *
   * @param userName - Identifier for the userName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFederatedUser(userName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:federated-user/${UserName}';
    arn = arn.replace('${UserName}', userName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html
   *
   * @param groupNameWithPath - Identifier for the groupNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGroup(groupNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:group/${GroupNameWithPath}';
    arn = arn.replace('${GroupNameWithPath}', groupNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type instance-profile to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html
   *
   * @param instanceProfileNameWithPath - Identifier for the instanceProfileNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInstanceProfile(instanceProfileNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:instance-profile/${InstanceProfileNameWithPath}';
    arn = arn.replace('${InstanceProfileNameWithPath}', instanceProfileNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type mfa to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html
   *
   * @param mfaTokenIdWithPath - Identifier for the mfaTokenIdWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMfa(mfaTokenIdWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:mfa/${MfaTokenIdWithPath}';
    arn = arn.replace('${MfaTokenIdWithPath}', mfaTokenIdWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type oidc-provider to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html
   *
   * @param oidcProviderName - Identifier for the oidcProviderName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOidcProvider(oidcProviderName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:oidc-provider/${OidcProviderName}';
    arn = arn.replace('${OidcProviderName}', oidcProviderName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html
   *
   * @param policyNameWithPath - Identifier for the policyNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPolicy(policyNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:policy/${PolicyNameWithPath}';
    arn = arn.replace('${PolicyNameWithPath}', policyNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
   *
   * @param roleNameWithPath - Identifier for the roleNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifResourceTag()
   */
  public onRole(roleNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:role/${RoleNameWithPath}';
    arn = arn.replace('${RoleNameWithPath}', roleNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type saml-provider to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html
   *
   * @param samlProviderName - Identifier for the samlProviderName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSamlProvider(samlProviderName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:saml-provider/${SamlProviderName}';
    arn = arn.replace('${SamlProviderName}', samlProviderName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type server-certificate to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html
   *
   * @param certificateNameWithPath - Identifier for the certificateNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onServerCertificate(certificateNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:server-certificate/${CertificateNameWithPath}';
    arn = arn.replace('${CertificateNameWithPath}', certificateNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type sms-mfa to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_sms.html
   *
   * @param mfaTokenIdWithPath - Identifier for the mfaTokenIdWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSmsMfa(mfaTokenIdWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:sms-mfa/${MfaTokenIdWithPath}';
    arn = arn.replace('${MfaTokenIdWithPath}', mfaTokenIdWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
   *
   * @param userNameWithPath - Identifier for the userNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifResourceTag()
   */
  public onUser(userNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:user/${UserNameWithPath}';
    arn = arn.replace('${UserNameWithPath}', userNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the AWS service to which this role is attached
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AWSServiceName
   *
   * Applies to actions:
   * - .toCreateServiceLinkedRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSServiceName(value: string | string[], operator?: Operator | string) {
    return this.if(`iam:AWSServiceName`, value, operator || 'StringLike');
  }

  /**
   * Filters by the resource that the role will be used on behalf of
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AssociatedResourceArn
   *
   * Applies to actions:
   * - .toPassRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifAssociatedResourceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`iam:AssociatedResourceArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ID of an AWS Organizations policy
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_OrganizationsPolicyId
   *
   * Applies to actions:
   * - .toGenerateOrganizationsAccessReport()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOrganizationsPolicyId(value: string | string[], operator?: Operator | string) {
    return this.if(`iam:OrganizationsPolicyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the AWS service to which this role is passed
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PassedToService
   *
   * Applies to actions:
   * - .toPassRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPassedToService(value: string | string[], operator?: Operator | string) {
    return this.if(`iam:PassedToService`, value, operator || 'StringLike');
  }

  /**
   * Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary
   *
   * Applies to actions:
   * - .toAttachRolePolicy()
   * - .toAttachUserPolicy()
   * - .toCreateRole()
   * - .toCreateUser()
   * - .toDeleteRolePermissionsBoundary()
   * - .toDeleteRolePolicy()
   * - .toDeleteUserPermissionsBoundary()
   * - .toDeleteUserPolicy()
   * - .toDetachRolePolicy()
   * - .toDetachUserPolicy()
   * - .toPutRolePermissionsBoundary()
   * - .toPutRolePolicy()
   * - .toPutUserPermissionsBoundary()
   * - .toPutUserPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPermissionsBoundary(value: string | string[], operator?: Operator | string) {
    return this.if(`iam:PermissionsBoundary`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of an IAM policy
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN
   *
   * Applies to actions:
   * - .toAttachGroupPolicy()
   * - .toAttachRolePolicy()
   * - .toAttachUserPolicy()
   * - .toDetachGroupPolicy()
   * - .toDetachRolePolicy()
   * - .toDetachUserPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPolicyARN(value: string | string[], operator?: Operator | string) {
    return this.if(`iam:PolicyARN`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the tags attached to an IAM entity (user or role).
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceTag
   *
   * Applies to resource types:
   * - role
   * - user
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`iam:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
