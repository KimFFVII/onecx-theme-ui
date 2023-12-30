/**
 * tkit-portal-server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.4.0-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MicrofrontendRegistrationInputDTO } from './microfrontendRegistrationInputDTO'
import { PortalAddressDTO } from './portalAddressDTO'
import { SubjectLinkDTO } from './subjectLinkDTO'

export interface CreatePortalDTO {
  version?: number
  creationDate?: string
  creationUser?: string
  modificationDate?: string
  modificationUser?: string
  id?: string
  portalName: string
  tenantId?: string
  description?: string
  themeName: string
  themeId: string
  homePage?: string
  baseUrl: string
  companyName?: string
  address?: PortalAddressDTO
  phoneNumber?: string
  rssFeedUrl?: string
  footerLabel?: string
  subjectLinks?: Set<SubjectLinkDTO>
  microfrontendRegistrations?: Set<MicrofrontendRegistrationInputDTO>
  imageUrls?: Set<string>
  portalRoles?: Array<string>
  logoUrl?: string
}
