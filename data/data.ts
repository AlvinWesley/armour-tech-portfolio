import { 
     CertificationTemplate,
     ContactTemplate, 
     CustomerContacts, 
     CustomerProfile, 
     Documentdownload, 
     DocumentDownloadRequests,
     FooterStatement, 
     Member, 
     MemberCertification, 
     MemberCertificationSkills, 
     MemberCertificationTechnologies, 
     MemberContact, 
     MemberDocument, 
     MemberSkill, 
     MemberTechnology, 
     MemberWorkExperience, 
     Organization, 
     OrganizationContact, 
     OrganizationProject, 
     Partner, 
     PersonalProject, 
     Project, 
     ProjectPhoto, 
     ProjectReview, 
     ProjectTeamMember, 
     ProjectTeamRole, 
     ProjectTechnology, 
     RoleTemplate, 
     Service, 
     ServiceRequests, 
     ServiceTechnology, 
     SkillsTemplate, 
     TechnologiesTemplate, 
     WorkExperienceArchievements, 
     WorkExperienceResponsibilities, 
     WorkExperienceSkills,
     WorkExperienceTechnologies } from "./types";

export const organizationData:Organization={
        id: "",
        org_name:"",
        objective:"",
        logo_url:"",
        cover_photo_url:"",
        display_photo_url:"",
        about:"",
        date_formed:"",
};
export const memberData:Member[]=[
{
        id:"",
        first_name:"",
        last_name:"",
        other_name:"",
        gender:"male",
        nationality:"",
        date_of_birth:"",
        about:"",
        objective:"",
        professional_summary:"",
        member_title:"",
        organization_id:"",
},
];
export const projectData:Project[]=[
    {
            id:"",
            proj_name:"",
            project_description:"",
            media_url:"",
            display_photo_url:"",
            date_started:"",
            date_completed:"",
            project_type:"web",
            project_details:"",
    },
];
export const customerProfileData:CustomerProfile[]=[
    {
    id:"",
    first_name:"",
    last_name:"",
    email:"",
    other_name:"",
    organization_id:"",
    },
];
export const contactTemplateData:ContactTemplate[]=[
    {
            id:"",
            display_name:"",
            base_url:"",
            contact_type:"email",
    },
];
export const skillsTemplateData:SkillsTemplate[]=[
    {
    id:"",
    skill_name:"",
    skill_description:"",
    search_link:"",
    },
];
export const footerStatementData:FooterStatement[]=[
    {
    id:"",
    footer_statement:"",
    organization_id:"",
    },
];
export const partnerData:Partner[]=[
    {
    id:"",
    partner_name:"",
    about:"",
    organization_id:"",
    },
];
export const roleTemplateData:RoleTemplate[]=[
    {
    id:"",
    role_name:"",
    role_description:"",
    search_link:"",
    },
];
export const technologiesTemplateData:TechnologiesTemplate[]=[
    {
    id:"",
    tech_name:"",
    tech_description:"",
    site_link:"",
    },
];
export const organizationContactData:OrganizationContact[]=[
    {
          id:"",
           template_id:"",
           organization_id:"",
           user_name:"",
           hyperlink:"",
           contact_availability:"alltime",
           availability_time_interval:{
               from:"",
               to:"",
           },
           is_active:true, 
    },
];
export const memberContactData:MemberContact[]=[
    {
        id:"",
           template_id:"",
           member_id:"",
           user_name:"",
           hyperlink:"",
           contact_availability:"alltime",
           availability_time_interval:{
               from:"",
               to:"",
           },
           is_active:true, 
    },
];
export const projectPhotoData:ProjectPhoto[]=[
{
    id:"",
    photo_label:"",
    project_id:"",
    photo_description:"",
    photo_url:"",
},
];
export const projectReviewData:ProjectReview[]=[
    {
    id:"",
    project_id:"",
    reviewer_id:"",
    review_message:"",
    rating:5,
    },
];
export const projectTechnologyData:ProjectTechnology[]=[
    {
    id:"",
    project_id:"",
    technology_id:"",
    percentage_used:50,
    },
];
export const memberTechnologyData:MemberTechnology[]=[
    {
    id:"",
    member_id:"",
    technology_id:"",
    percentage_used:50,

    },
];
export const certificationTemplateData:CertificationTemplate[]=[
    {
    id:"",
    cert_name:"",
    cert_description:"",
    cert_providor:"",
    site_link:"",
    },
];
export const memberCertificationData:MemberCertification[]=[
    {
    id:"",
    member_id:"",
    document_id:"",
    certification_temp_id:"",
    certification_level_attained:"",
    date_taken:"",
    date_completed:"",
    certificate_number:"",
    is_valid:true,
    },
];
export const memberWorkExperienceData:MemberWorkExperience[]=[
    {
    id:"",
    member_id:"",
    job_title:"",
    work_description:"",
    company_name:"",
    company_logo_url:"",
    date_started:"",
    date_completed:"",
    },
];
export const memberSkillData:MemberSkill[]=[
    {
    id:"",
    member_id:"",
    skill_template_id:"",

    },
];
export const memberDocumentData:MemberDocument[]=[
    {
            id:"",
            member_id:"",
            document_name:"",
            source_url:"",
            storage_url:"",
            document_type:"certificate",
            document_privacy:"public",
            file_name:"",
            file_size:23000,
            file_type:"",
            file_extension:"",
    },
];
export const documentDownloadData:Documentdownload[]=[

    {
    id:"",
    document_id:"",
    download_source_ip:"",
    device_name:"", 
    },
];
export const personalProjectData:PersonalProject[]=[
    {
    id:"",
    member_id:"",
    project_id:"",
    },
]
export const organizationProjectData:OrganizationProject[]=[
    {
    id:"",
    organization_id:"",
    project_id:"",
    },
];
export const projectTeamMemberData:ProjectTeamMember[]=[
    {
    id:"",
    organization_proj_id:"",
    member_id:"", 
    },
];
export const projectTeamRoleData:ProjectTeamRole[]=[
    {
    id:"",
    project_team_member_id:"",
    role_temp_id:"",
    contribution_percentage:50,
    contibution_description:"",
    },
];
export const documentDownloadRequestsData:DocumentDownloadRequests[]=[
    {
            id:"",
            document_id:"",
            req_email:"",
            req_msg:"",
            req_name:"",
            ref_code:"",
            req_status:"pending",
    },
];
export const serviceData:Service[]=[
    {
            id:"",
            service_name:"",
            organization_id:"",
            service_description:"",
            photo_url:"",
            estimated_completion_time:"",
            service_type:"app_development",
    },
];
export const serviceTechnologyData:ServiceTechnology[]=[
    {
    id:"",
    service_id:"",
    technology_id:"",
    percentage_used:60,
    },
];
export const customerContactsData:CustomerContacts[]=[
       {
          id:"",
           template_id:"",
           customer_id:"",
           user_name:"",
           hyperlink:"",
           contact_availability:"alltime",
           availability_time_interval:{
               from:"",
               to:"",
           },
           is_active:true, 
    },
];
export const serviceRequestsData:ServiceRequests[]=[
    {
            id:"",
            service_id:"",
            customer_id:"",
            req_ref_code:"",
            request_message:"",
            req_status:"pending",
    },
];
export const workExperienceArchivementsData:WorkExperienceArchievements[]=[
    {
    id:"",
    arch_name:"",
    arch_description:"",
    work_exp_id:"",
    },
];
export const workExperienceTechnologiesData:WorkExperienceTechnologies[]=[
    {
    id:"",
    tech_temp_id:"",
    work_exp_id:"",
    },
];
export const WorkExperienceResponsibilitiesData:WorkExperienceResponsibilities[]=[
    {
    id:"",
    resp_name:"",
    resp_description:"",
    work_exp_id:"",
    },
];
export const workExperienceSkillsData:WorkExperienceSkills[]=[
    {
        id:"",
    skills_template_id:"",
    work_exp_id:"",
    },
];
export const memberCertificationTechnologiesData:MemberCertificationTechnologies[]=[
    {
    id:"",
    member_certification_id:"",
    tech_template_id:"",
    },
];
export const memberCertificationSkillsData:MemberCertificationSkills[]=[
    {
    id:"",
    member_certification_id:"",
    skills_template_id:"", 
    },
];