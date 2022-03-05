import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class FusionSkillsPipe implements PipeTransform {
    transform(skills: any, metadata: ArgumentMetadata): any{
        if(!skills || !Array.isArray(skills))
            throw new BadRequestException();
        skills = skills.map(skill => skill.toUpperCase())
        skills = skills.join("-");
        return skills;
    }
}