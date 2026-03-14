export type ServiceRequestStatus ='pending'|'processed'|'rejected';
export type DocumentReqStatus ='pending'|'processed'|'rejected';
export type DocumentPrivacy ='private'|'public'|'read_only';
export type Gender ='male'|'female'|'other'|'prefer_not_to_say';
export type ProjectType =
    'android' |
    'web' |
    'ios' |
    'windows' |
    'macos' |
    'linux' |
    'cross_platform' |
    'command_line' |
    'gaming' |
    'library' |
    'api' |
    'mobile' |
    'desktop' |
    'embedded' |
    'machine_learning' |
    'blockchain' |
    'iot' |
    'ar_vr' |
    'chrome_extension' |
    'firefox_addon' |
    'safari_extension';
export type ContactType =
    'facebook' |
    'instagram' |
    'email' |
    'discord' |
    'github' |
    'whatsapp' |
    'telephone' |
    'website' |
    'linkedin' |
    'twitter' |
    'x' |
    'telegram' |
    'signal' |
    'slack' |
    'microsoft_teams' |
    'wechat' |
    'line' |
    'snapchat' |
    'tiktok' |
    'youtube' |
    'medium' |
    'devto' |
    'hashnode' |
    'stackoverflow' |
    'gitlab' |
    'bitbucket';
export type DocumentType =
    'certificate' |
    'resume' |
    'cv' |
    'transcripts' |
    'recommendation' |
    'thesis' |
    'dissertation' |
    'portfolio' |
    'cover_letter' |
    'identification' |
    'passport' |
    'driver_license' |
    'offer_letter' |
    'contract' |
    'nda' |
    'proposal' |
    'report' |
    'publication' |
    'research_paper' |
    'whitepaper' |
    'presentation' |
    'spreadsheet' |
    'database' |
    'source_code';
export type PartnerType =
    'individual' |
    'company' |
    'corporation' |
    'government' |
    'organization' |
    'non_governmental_organization' |
    'non_profit' |
    'educational_institution' |
    'university' |
    'research_institute' |
    'startup' |
    'smb' |
    'enterprise' |
    'llc' |
    'partnership' |
    'sole_proprietorship' |
    'public_sector' |
    'private_sector' |
    'joint_venture' |
    'consortium' |
    'foundation' |
    'trust' |
    'cooperative';
export type WorkType =
    'freelance' |
    'volunteer' |
    'employment' |
    'full_time' |
    'part_time' |
    'contract' |
    'internship' |
    'apprenticeship' |
    'consultant' |
    'temporary' |
    'seasonal' |
    'remote' |
    'hybrid' |
    'on_site' |
    'gig' |
    'project_based' |
    'retainer' |
    'fellowship' |
    'scholarship' |
    'research_assistant' |
    'teaching_assistant' |
    'postdoctoral' |
    'visiting_researcher';
export type ContactAvailability =
    'unavailable' |
    'alltime' |
    'weekends' |
    'weekdays' |
    'monthly' |
    'annually' |
    'as_needed' |
    'by_appointment' |
    'emergency_only' |
    'evenings' |
    'mornings';
export type ServiceType =
    'app_development' |
    'web_development' |
    'mobile_development' |
    'desktop_development' |
    'database_design' |
    'database_administration' |
    'software_upgrade' |
    'software_migration' |
    'application_design' |
    'ui_ux_design' |
    'graphic_design' |
    'consulting' |
    'training' |
    'mentoring' |
    'technical_support' |
    'it_support' |
    'cloud_computing' |
    'devops' |
    'qa_testing' |
    'automation' |
    'cybersecurity' |
    'data_analysis' |
    'data_science' |
    'machine_learning' |
    'ai_development' |
    'blockchain_development' |
    'smart_contracts' |
    'api_integration' |
    'system_integration' |
    'legacy_modernization' |
    'code_review' |
    'performance_optimization' |
    'seo_services' |
    'digital_marketing' |
    'content_creation' |
    'technical_writing' |
    'documentation' |
    'project_management' |
    'product_management' |
    'business_analysis' |
    'system_architecture' |
    'infrastructure_planning' |
    'disaster_recovery' |
    'backup_solutions' |
    'network_design' |
    'server_maintenance' |
    'website_hosting' |
    'domain_registration' |
    'email_services';
export interface Organization {
    id: string;
    org_name:string;
    objective:string;
    logo_url:string;
    cover_photo_url?:string;
    display_photo_url?:string;
    about?:string;
    date_formed:string;
}
export interface Member{
    id:string;
    first_name:string;
    last_name:string;
    other_name?:string;
    gender:Gender;
    nationality:string;
    date_of_birth:string;
    about?:string;
    objective?:string;
    professional_summary?:string;
    member_title:string;
    organization_id:string;
}
export interface Project{
    id:string;
    proj_name:string;
    project_description:string;
    media_url?:string;
    display_photo_url?:string;
    date_started:string;
    date_completed?:string;
    project_type:ProjectType;
    project_details?:string;
}
export interface CustomerProfile{
    id:string;
    first_name:string;
    last_name:string;
    email:string;
    other_name?:string;
}
export interface ContactTemplate{
    id:string;
    display_name:string;
    base_url:string;
    contact_type:ContactType;
}
export interface SkillsTemplate{
    id:string;
    skill_name:string;
    skill_description?:string;
    search_link?:string;
}
export interface FooterStatement{
    id:string;
    footer_statement?:string;
    organization_id:string;
}
export interface Partner{
    id:string;
    partner_name:string;
    about:string;
    organization_id:string;
}
export interface RoleTemplate{
    id:string;
    role_name:string;
    role_description?:string;
    search_link?:string;

}
export interface RoleTemplate{
    id:string;
    role_name:string;
    role_description?:string;
    search_link?:string;
}
export interface TechnologiesTemplate{
    id:string;
    tech_name:string;
    tech_description?:string;
    site_link?:string;
}
export interface OrganizationContact{
    id:string;
    template_id:string;
    organization_id:string;
    user_name:string;
    hyperlink:string;
    contact_availability:ContactAvailability;
    availability_time_interval:{
        from:string;
        to:string;
    }
    is_active:boolean;
}
export interface MemberContact{
    id:string;
    template_id:string;
    member_id:string;
    user_name:string;
    hyperlink:string;
    contact_availability:ContactAvailability;
    availability_time_interval:{
        from:string;
        to:string;
    }
    is_active:boolean;
}
export interface ProjectPhoto{
    id:string;
    photo_label:string;
    project_id:string;
    photo_description?:string;
    photo_url?:string;
}
export interface ProjectReview{
    id:string;
    project_id:string;
    reviewer_id:string;
    review_message:string;
    rating:number;
}
export interface ProjectTechnology{
    id:string;
    project_id:string;
    technology_id:string;
    percentage_used:number;

}
export interface MemberTechnology{
    id:string;
    member_id:string;
    technology_id:string;
    percentage_used:number;
}
export interface CertificationTemplate{
    id:string;
    cert_name:string;
    cert_description:string;
    cert_providor:string;
    site_link:string;
}
export interface MemberCertifiaction{
    id:string;
    member_id:string;
    certification_temp_id:string;
    certification_level_attained:string;
    date_taken:string;
    date_completed:string;
    certificate_number:string;
    is_valid:string;

}
export interface MemberWorkExperience{
    id:string;
    member_id:string;
    job_title:string;
    work_description:string;
    company_name:string;
    company_logo_url:string;
    date_started:string;
    date_completed:string;
}
export interface MemberSkill{
    id:string;
    member_id:string;
    skill_template_id:string;

}
export interface MemberDocument{
    id:string;
    member_id:string;
    document_name:string;
    source_url:string;
    storage_url:string;
    document_type:DocumentType;
    document_privacy:DocumentPrivacy;
    file_name:string;
    file_size:string;
    file_type:string;
    file_extension:string;
}
export interface Documentdownload{
    id:string;
    document_id:string;
    download_source_ip:string;
    device_name:string;
};
export interface PersonalProject{
    id:string;
    member_id:string;
    project_id:string;

};
export interface OrganizationProject{
    id:string;
    organization_id:string;
    project_id:string;

};
export interface ProjectTeamMember{
    id:string;
    organization_proj_id:string;
    member_id:string;
};
export interface ProjectTeamRole{
    id:string;
    project_team_member_id:string;
    role_temp_id:string;
    contribution_percentage:number;
};
export interface DocumentDownloadRequests{
    id:string;
    document_id:string;
    req_email:string;
    req_msg:string;
    req_name:string;
    ref_code:string;
    req_status:DocumentReqStatus;

};

export interface Service{
    id:string;
    service_name:string;
    service_description:string;
    photo_url:string;
    estimated_completion_time:string;
    service_type:ServiceType;

}
export interface ServiceTechnology{
    id:string;
    service_id:string;
    technology_id:string;
    percentage_used:number;

}
export interface CustomerContacts{
    id:string;
    template_id:string;
    customer_id:string;
    user_name:string;
    hyperlink:string;
    contact_availability:ContactAvailability;
    availability_time_interval:{
        from:string;
        to:string;
    }
    is_active:boolean;
};
export interface ServiceRequests{
    id:string;
    service_id:string;
    customer_id:string;
    req_ref_code:string;
    request_message:string;
    req_status:ServiceRequestStatus;
};
export interface WorkExperienceArchievements{
    id:string;
    arch_name:string;
    arch_description:string;
    work_exp_id:string;

};
export interface WorkExperienceResponsibilities{
    id:string;
    resp_name:string;
    resp_description:string;
    work_exp_id:string;

};
export interface WorkExperienceSkills{
    id:string;
    skills_template_id:string;
    work_exp_id:string;

};
export interface MemberCertificationTechnologies{
    id:string;
    member_certification_id:string;
    tech_template_id:string;

};
export interface MemberCertificationSkills{
    id:string;
    member_certification_id:string;
    skills_template_id:string;

};
