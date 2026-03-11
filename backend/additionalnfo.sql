CREATE TABLE IF NOT EXISTS keyArchievements(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
arch_name TEXT NOT NULL,
arch_description TEXT,
work_exp_id UUID REFERENCES MemberWorkExperience(id)  ON DELETE SET NULL,
created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
UNIQUE(arch_name,work_exp_id)
);
CREATE INDEX idx_key_arch_work_exp_id ON keyArchievements(work_exp_id);
CREATE TABLE IF NOT EXISTS WorkTechnologies(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tech_temp_id UUID NOT NULL REFERENCES TechnologiesTemplate(id),
    work_exp_id UUID NOT NULL REFERENCES MemberWorkExperience(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(tech_temp_id,work_exp_id)
);
CREATE INDEX idx_work_tech_tech_temp_id ON WorkTechnologies(tech_temp_id);
CREATE INDEX idx_work_tech_work_exp_id ON WorkTechnologies(work_exp_id);
CREATE TABLE IF NOT EXISTS WorkResponsibilities(
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 resp_name TEXT NOT NULL,
 resp_description TEXT,
 work_exp_id UUID NOT NULL REFERENCES MemberWorkExperience(id),
 created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
 UNIQUE(resp_name,work_exp_id)
);
CREATE INDEX idx_work_resp_work_exp_id ON WorkResponsibilities(work_exp_id)